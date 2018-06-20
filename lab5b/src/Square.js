export class Square {
    constructor(element){
        this.element = element;
        this.x = 0;
        this.y = 0;
    }

    moveTo(x, y){
        this.x = x;
        this.y = y;
    }

    draw(){
        this.element.style.left = (this.x * 50) + 'px';
        this.element.style.top = (this.y * 50) + 'px';
    }

    position(){
        return {x: this.x, y: this.y};
    }
}