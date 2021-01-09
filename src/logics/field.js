"use strict";

import BlockState from "./block"
import { v4 as uuidv4 } from 'uuid';

export default class FieldState {
    static minHeight = 10;
    static minWidth = 20;
    static maxHeight = 100;
    static maxWidth = 200;

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

    dig({ height, width, attack }) {
        this.blocks[height][width].dig(attack)
    }
}