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
                let uuid = uuidv4();
                v.push(new BlockState({ id: uuid, type: "soil", attributes: [] }))
            }
            blocks.push(v)
        }

        // create goal
        let goal_height = Math.floor(Math.random() * height);
        let goal_width = Math.floor(Math.random() * width);
        blocks[goal_height][goal_width].setAttribute("goal")

        // create hints
        let cnt = height * width / 10;
        for (let i = 0; i < cnt; i++) {
            let hint_height = Math.floor(Math.random() * height);
            let hint_width = Math.floor(Math.random() * width);
            if (!blocks[hint_height][hint_width].isGoal()) {
                blocks[hint_height][hint_width].setAttribute("hint")
            }
        }

        this.blocks = blocks
        this.height = height
        this.width = width
        this.goal_height = goal_height
        this.goal_width = goal_width
    }

    static validate({ height, width, attributeFunctions }) {
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

    static validate_functions({ attributeFunctions }) {
        Object.keys(attributeFunctions).forEach((k) => {
            BlockState.blockAttributes.forEach((v) => {
                if (!Object.keys(attributeFunctions).includes(v)) {
                    throw 'invalid arguments';
                }
            })
            if (typeof attributeFunctions[k] != "function") {
                throw 'invalid arguments';
            }
        })
    }

    setAttributeFunctions({ attributeFunctions }) {
        FieldState.validate_functions({ attributeFunctions })
        this.attributeFunctions = attributeFunctions
    }

    dig({ height, width, attack }) {
        this.blocks[height][width].dig(attack)
        if (this.blocks[height][width].durable == 0) {
            this.blocks[height][width].attributes.forEach((v) => {
                this.attributeFunctions[v]()
            })
        }
    }

    hint({ height, width }) {
        return Math.abs(height - this.goal_height) + Math.abs(width - this.goal_width)
    }
}