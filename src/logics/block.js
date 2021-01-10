"use strict";

export default class BlockState {
    static blockSkin = [
        "gold", "soil", "rock", "iron", "white",
        "arrow-left", "arrow-up", "arrow-down", "arrow-right", "treasure"
    ]
    static blockType = ["sakusaku", "katikati", "gotigoti", "otakara", "yazirusi"]
    static blockProperties = {
        soil: {
            blockSkin: {
                before: "soil",
                current: "soil",
                after: "white",
            },
            durable: 100,
        },
        rock: {
            blockSkin: {
                before: "rock",
                current: "rock",
                after: "white",
            },
            durable: 300,
        },
        iron: {
            blockSkin: {
                before: "iron",
                current: "iron",
                after: "white",
            },
            durable: 800,
        },
        arrowleft: {
            blockSkin: {
                before: "soil",
                current: "soil",
                after: "arrow-left",
            },
            durable: 100,
        },
        arrowright: {
            blockSkin: {
                before: "soil",
                current: "soil",
                after: "arrow-right",
            },
            durable: 100,
        },
        arrowup: {
            blockSkin: {
                before: "soil",
                current: "soil",
                after: "arrow-up",
            },
            durable: 100,
        },
        arrowdown: {
            blockSkin: {
                before: "soil",
                current: "soil",
                after: "arrow-down",
            },
            durable: 100,
        },
        treasure: {
            blockSkin: {
                before: "soil",
                current: "soil",
                after: "treasure",
            },
            durable: 100,
        },
    }

    constructor({ id, type }) {
        BlockState.validate({ type })
        this.id = id
        this.type = type;
        this.durable = BlockState.blockProperties[type].durable
        this.skin = BlockState.blockProperties[type]["blockSkin"]["before"]
    }

    static validate({ type }) {
        BlockState.validate_type(type)
        return true
    }

    static validate_type(type) {
        if (!Object.keys(BlockState.blockProperties).includes(type)) {
            throw 'invalid arguments';
        }
        if (typeof BlockState.blockProperties[type]["durable"] == "undefined") {
            throw 'invalid durable arguments';
        }
        let keys = ["before", "current", "after"]
        keys.forEach((k) => {
            let skin = BlockState.blockProperties[type]["blockSkin"][k]
            if (!this.blockSkin.includes(skin)) {
                throw 'invalid properties';
            }
        })

        return true;
    }

    static random_block_type() {
        let random = Math.floor(Math.random() * 10);
        if (random < 5) {
            return "soil"
        }
        if (random < 8) {
            return "rock"
        }
        if (random < 10) {
            return "iron"
        }
    }

    dig(attack) {
        this.durable = Math.max(0, this.durable - attack)
        let { current, after } = BlockState.blockProperties[this.type]["blockSkin"]
        if (this.durable != BlockState.blockProperties[this.type]["durable"]) {
            this.skin = current
        }
        if (this.durable == 0) {
            this.skin = after
        }
    }

    isBroken() {
        return this.durable == 0
    }

    isOverridable() {
        let type = this.type
        if (type == "treasure" || type == "arrow-left" || type == "arrow-right" || type == "arrow-up" || type == "arrow-down") {
            return false
        }
        return true
    }
}