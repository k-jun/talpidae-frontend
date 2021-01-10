"use strict";

import BlockState from "./block"
import { v4 as uuidv4 } from 'uuid';

export default class FieldState {
    static minHeight = 10;
    static minWidth = 20;
    static maxHeight = 100;
    static maxWidth = 200;

    static treasureCount = 3;

    constructor({ height, width }) {
        FieldState.validate({ height, width })

        let blocks = []
        for (let i = 0; i < height; i++) {
            let v = []
            for (let j = 0; j < width; j++) {
                let id = uuidv4();
                let type = BlockState.random_block_type()
                v.push(new BlockState({ id, type }))
            }
            blocks.push(v)
        }
        FieldState.set_treasure({ blocks, height, width })
        FieldState.set_arrow({ blocks, height, width })

        this.blocks = blocks
        this.height = height
        this.width = width
    }

    static validate({ height, width }) {
        FieldState.validate_hw({ height, width })
    }

    static validate_hw({ height, width }) {
        if (
            BlockState.minHeight <= height &&
            height <= BlockState.maxHeight &&
            BlockState.minWidth <= width &&
            width <= BlockState.maxWidth
        ) {
            throw 'invalid arguments';

        }
    }

    static set_treasure({ blocks, height, width }) {
        let cnt = 0
        while (cnt < FieldState.treasureCount) {
            let random_height = Math.floor(Math.random() * height);
            let random_width = Math.floor(Math.random() * width);
            let tb = blocks[random_height][random_width]
            if (!tb.isOverridable()) {
                continue
            }
            let id = uuidv4();
            let block = new BlockState({ id, type: "treasure" })
            blocks[random_height][random_width] = block

            // around
            let indexes = n_around_indexes({ h: random_height, w: random_width, n: 1, max_h: height, max_w: width })
            indexes.forEach(({ h, w }) => {
                let id = uuidv4();
                if (blocks[h][w].isOverridable()) {
                    blocks[h][w] = new BlockState({ id, type: "iron" })
                }
            })
            let indexes2 = n_around_indexes({ h: random_height, w: random_width, n: 2, max_h: height, max_w: width })
            indexes2.forEach(({ h, w }) => {
                let id = uuidv4();
                if (blocks[h][w].isOverridable()) {
                    blocks[h][w] = new BlockState({ id, type: "rock" })
                }
            })

            cnt += 1
        }

    }

    static set_arrow({ blocks, height, width }) {
        let cnt = 0
        while (cnt < FieldState.treasureCount * 3) {
            let random_height = Math.floor(Math.random() * height);
            let random_width = Math.floor(Math.random() * width);
            let tb = blocks[random_height][random_width]
            if (!tb.isOverridable()) {
                continue
            }
            let id = uuidv4();
            let block = FieldState.generate_arrow({ id, blocks, height: random_height, width: random_width })
            blocks[random_height][random_width] = block
            cnt += 1
            // around
            let indexes = n_around_indexes({ h: random_height, w: random_width, n: 1, max_h: height, max_w: width })
            indexes.forEach(({ h, w }) => {
                let id = uuidv4();
                if (blocks[h][w].isOverridable()) {
                    blocks[h][w] = new BlockState({ id, type: "rock" })
                }
            })
        }

    }

    static generate_arrow({ id, blocks, height, width }) {
        let close = { heigth: FieldState.maxHeight * 10, width: FieldState.maxWidth * 10 }
        for (let i = 0; i < blocks.length; i++) {
            for (let j = 0; j < blocks[i].length; j++) {
                if (blocks[i][j].type == "treasure") {
                    if (FieldState.distance(i, j, height, width) < FieldState.distance(close.heigth, close.width, height, width)) {
                        close = { heigth: i, width: j }
                    }
                }
            }
        }
        let vertical = close.heigth - height
        let horizontal = close.width - width
        if (Math.abs(vertical) >= Math.abs(horizontal)) {
            return new BlockState({ id, type: vertical > 0 ? "arrowdown" : "arrowup" })
        }
        return new BlockState({ id, type: horizontal > 0 ? "arrowright" : "arrowleft" })
    }

    static distance(cx, cy, nx, ny) {
        return Math.abs(cx - nx) + Math.abs(cy - ny)
    }

    dig({ height, width, attack }) {
        this.blocks[height][width].dig(attack)
    }
}


function n_around_indexes({ h, w, n, max_h, max_w }) {
    let indexes = []
    // top line
    for (let i = w - n + 1; i < w + n; i++) {
        indexes.push({ h: h - n, w: i })
    }
    // down line
    for (let i = w - n + 1; i < w + n; i++) {
        indexes.push({ h: h + n, w: i })
    }
    // left line
    for (let i = h - n + 1; i < h + n; i++) {
        indexes.push({ h: i, w: w - n })
    }
    // right line
    for (let i = h - n + 1; i < h + n; i++) {
        indexes.push({ h: i, w: w + n })
    }

    // corners
    indexes.push({ h: h - n, w: w - n })
    indexes.push({ h: h + n, w: w - n })
    indexes.push({ h: h - n, w: w + n })
    indexes.push({ h: h + n, w: w + n })

    // filters
    let valid_indexes = indexes.filter(({ h, w }) => h >= 0 && h < max_h && w >= 0 && w < max_w)
    return valid_indexes
}