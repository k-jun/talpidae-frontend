"use strict";

import BrockState from "./brock"
import { v4 as uuidv4 } from 'uuid';

export default class FieldState {
    static minHeight = 10;
    static minWidth = 20;
    static maxHeight = 100;
    static maxWidth = 200;

    constructor({ height, width, attributeFunctions }) {
        FieldState.validate({ height, width, attributeFunctions })

        let brocks = []
        for (let i = 0; i < height; i++) {
            let v = []
            for (let j = 0; j < width; j++) {
                let uuid = uuidv4();
                v.push(new BrockState({ id: uuid, type: "soil", attributes: [] }))
            }
            brocks.push(v)
        }

        // create goal
        let goal_width = Math.floor(Math.random() * height);
	    let goal_height = Math.floor(Math.random() * width);

        // create hints
        this.brocks = brocks
        this.height = height
        this.width = width
        this.attributeFunctions = attributeFunctions
    }

    static validate({ height, width, attributeFunctions }) {
        FieldState.validate_hw({ height, width })
        FieldState.validate_functions({ attributeFunctions })
    }

    static validate_hw({ height, width }) {
        if (
            BrockState.minHeight <= height &&
            height <= BrockState.maxHeight &&
            BrockState.minWidth <= width &&
            width <= BrockState.maxWidth
        ) {
            throw 'invalid arguments';

        }
    }

    static validate_functions({ attributeFunctions }) {
        Object.keys(attributeFunctions).forEach((k) => {
            BrockState.brockAttributes.forEach((v) => {
                if (!Object.keys(attributeFunctions).includes(v)) {
                    throw 'invalid arguments';
                }
            })
            if (typeof attributeFunctions[k] != "function") {
                throw 'invalid arguments';   
            }
        })

    }

    dig({ height, width, attack }) {
        this.brocks[height][width].dig(attack)
        if (this.brocks[height][width] == 0) {
            this.brocks[height][width].attributes.forEach((v) => {
                this.attributeFunctions[v]()
            })
        }
    }
}