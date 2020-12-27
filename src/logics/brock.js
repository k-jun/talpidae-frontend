"use strict";

export default class BrockState {
    static brockProparties = {
        required: ["durable"],
        soil: {
            durable: 100,
        }
    }
    static brockAttributes = ["goal", "hint"]

    constructor({ id, type, attributes }) {
        BrockState.validate({ type, attributes })
        this.type = type;
        this.attributes = attributes
        this.durable = BrockState.brockProparties[type].durable
    }

    static validate({ type, attributes }) {
        BrockState.validate_type(type)
        for (let i = 0; i < attributes.length; i++) {
            BrockState.validate_attribute(attributes[i])
        }
        return true
    }

    static validate_type(type) {
        if (!Object.keys(BrockState.brockProparties).includes(type)) {
            throw 'invalid arguments';
        }
        let properties = BrockState.brockProparties["required"]
        for (let i = 0; i < properties.length; i++) {
            if (typeof BrockState.brockProparties[type][properties[i]] == "undefined") {
                throw 'invalid arguments';
            }
        }
        return true;
    }
    static validate_attribute(attribute) {
        if (!BrockState.brockAttributes.includes(attribute)) {
            throw 'invalid arguments';
        }
    }

    dig(attack) {
        this.durable = Math.max(0, this.durable - attack)
    }

    addAttribute(attribute) {
        if (!Brocks.validate_type(attribute)) {
            throw 'invalid brock type';
        }
        this.attributes.push(type)
    }

    isGoal() {
        return this.attributes.includes("goal")
    }
}