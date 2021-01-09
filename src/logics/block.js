"use strict";

export default class BlockState {
    static blockProperties = {
        required: ["durable"],
        "soil": {
            durable: 100,
        },
        "rock": {
            durable: 200,
        },
        "moss": {
            durable: 100,
        },
        "iron": {
            durable: 500,
        },
    }

    constructor({ id, type }) {
        BlockState.validate({ type })
        this.id = id
        this.type = type;
        this.durable = BlockState.blockProperties[type].durable
    }

    static validate({ type }) {
        BlockState.validate_type(type)
        return true
    }

    static validate_type(type) {
        if (!Object.keys(BlockState.blockProperties).includes(type)) {
            throw 'invalid arguments';
        }
        let properties = BlockState.blockProperties["required"]
        for (let i = 0; i < properties.length; i++) {
            if (typeof BlockState.blockProperties[type][properties[i]] == "undefined") {
                throw 'invalid arguments';
            }
        }
        return true;
    }

    static random_block_type() {
        let random = Math.floor(Math.random() * 10);
        if (random < 5) {
            return "soil"
        }
        if (random < 7) {
            return "moss"
        }
        if (random < 9) {
            return "rock"
        }
        if (random < 10) {
            return "iron"
        }
    }

    dig(attack) {
        this.durable = Math.max(0, this.durable - attack)
    }

    isBroken() {
        return this.durable == 0
    }
}