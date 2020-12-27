"use strict";

export default class BlockState {
    static blockProperties = {
        required: ["durable"],
        soil: {
            durable: 101,
        }
    }
    static blockAttributes = ["goal", "hint"]

    constructor({ id, type, attributes }) {
        BlockState.validate({ type, attributes })
        this.id = id
        this.type = type;
        this.attributes = attributes
        this.durable = BlockState.blockProperties[type].durable
    }

    static validate({ type, attributes }) {
        BlockState.validate_type(type)
        for (let i = 0; i < attributes.length; i++) {
            BlockState.validate_attribute(attributes[i])
        }
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
    static validate_attribute(attribute) {
        if (!BlockState.blockAttributes.includes(attribute)) {
            throw 'invalid arguments';
        }
    }

    dig(attack) {
        this.durable = Math.max(0, this.durable - attack)
    }

    isBroken() {
        return this.durable == 0
    }

    setAttribute(attribute) {
        BlockState.validate_attribute(attribute)
        this.attributes.push(attribute)
    }

    isGoal() {
        return this.attributes.includes("goal")
    }
}