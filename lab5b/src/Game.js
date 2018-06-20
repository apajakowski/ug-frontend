import {Observable} from 'rxjs/observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/groupBy';
import 'rxjs/add/operator/mergeAll';
import 'rxjs/add/operator/filter';

export class Game {

    constructor(gridElement, player, enemy) {
        this.grid = gridElement;
        this.player = player;
        this.enemy = enemy;
        this.player.moveTo(9, 9);
    }

    run(){
        this._runEnemy();
        this._handleInput();
    }

    _runEnemy(){
        Observable.interval(500).subscribe(() => {
            const vector = this._getRandomTranslation();
            this.enemy.moveTo(this.enemy.x + vector.x, this.enemy.y + vector.y);
            this._clampPosition(this.enemy);
            this.enemy.draw();
        });
    }

    _handleInput(){
        Observable.merge(
            Observable.fromEvent(document, "keydown"),
            Observable.fromEvent(document, "keyup")
        )
        .groupBy(evt => evt.keyCode)
        .map(group => group.distinctUntilChanged(null, e => e.type))
        .mergeAll()
        .filter(evt => evt.type != 'keyup')
        .subscribe(evt => {
            const vector = this._mapKeyToVector(evt);
            this.player.moveTo(this.player.x + vector.x, this.player.y + vector.y);
            this._clampPosition(this.player);
            this.player.draw();
    
            this._checkWinCondition();
        });
    }

    _checkWinCondition(){
        if (this.enemy.x == this.player.x && this.enemy.y == this.player.y){
            grid.style.display = 'none';
            let win = document.createElement('h1');
            win.innerText = 'you win!';
            document.body.appendChild(win);
        }
    }

    _getRandomTranslation() {
        const x = Math.random() >= 0.5 ? 1 : -1;
        const y = Math.random() >= 0.5 ? 1 : -1;
        return {x: x, y: y};
    }

    _clampPosition(square){
        if (square.x < 0) square.x++; 
        if (square.x >= 10) square.x--;
        if (square.y < 0) square.y++; 
        if (square.y >= 10) square.y--;
    }

    _mapKeyToVector(evt){
        if (evt.key == 'ArrowUp') return {x: 0, y: -1};
        if (evt.key == 'ArrowDown') return {x: 0, y: 1};
        if (evt.key == 'ArrowLeft') return {x: -1, y: 0};
        if (evt.key == 'ArrowRight') return {x: 1, y: 0};
        return {x: 0, y: 0};
    }
}