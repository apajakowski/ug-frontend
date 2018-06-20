import {Square} from './Square';
import {Game} from './Game';

const grid = document.querySelector('#grid');
const enemy = new Square(document.querySelector('#enemy'));
const player = new Square(document.querySelector('#player'));

const game = new Game(grid, player, enemy);
game.run();
