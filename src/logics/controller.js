"use strict";

export default class Controller {
    constructor({ height, width, current_height, current_width }) {
        this.height = height
        this.width = width
        this.current_height = current_height
        this.current_width = current_width
    }

    moveUp() {
        if (this.current_height != 0) {
            this.current_height -= 1;
        }
    }
    moveDown() {
        if (this.current_height != this.height - 1) {
            this.current_height += 1;
        }
    }
    moveLeft() {
        if (this.current_width != 0) {
            this.current_width -= 1;
        }
    }
    moveRight() {
        if (this.current_width != this.width - 1) {
            this.current_width += 1;
        }
    }
    currentPosition() {
        return { height: this.current_height, width: this.current_width }
    }
    getAroundPositions() {
        let positions = []
        if (this.current_height != 0) {
            positions.push({ height: this.current_height - 1, width: this.current_width })
        }
        if (this.current_height != this.height - 1) {
            positions.push({ height: this.current_height + 1, width: this.current_width })
        }
        if (this.current_width != 0) {
            positions.push({ height: this.current_height, width: this.current_width - 1 })
        }
        if (this.current_width != this.width - 1) {
            positions.push({ height: this.current_height, width: this.current_width + 1 })
        }
        return positions
    }
}