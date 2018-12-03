class Game {

    constructor() {
        this.animate = this.animate.bind(this);
        this.board = JXG.JSXGraph.initBoard('jxgbox', { boundingbox: [0, 0, 60, -30], keepaspectratio: true, axis: false });
        this.bird = new Bird(this.board, 1, -1);
        this.obstacles = [];
        this.obstacles.push(new Obstacle(this.board, 20, 0, 5, 30, { lower: 8, upper: 15 }));
        this.obstacles.push(new Obstacle(this.board, 40, 0, 5, 30, { lower: 8, upper: 15 }));
        this.obstacles.push(new Obstacle(this.board, 60, 0, 5, 30, { lower: 8, upper: 15 }));
        this.upButton = this.board.create('button', [55, -25, 'restart', () => {
            this.restart();
        }], {});
        this.animationPoint = this.board.create('point', [-1, 1]);
    }

    start() {
        this.animationPoint.moveAlong(this.animate, 0);
    }

    restart() {
        this.bird.dead = false;
        this.bird.velocity = 0;
        this.bird.y = -1;
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].setX(20 * (i + 1));
        }
        this.animationPoint.moveAlong(this.animate, 0);
    }

    animate() {

        //update Bird
        this.bird.update();

        //update obstacles
        this.obstacles.forEach(obstacle => {
            obstacle.update();
        });

        //mark collisions
        this.obstacles.forEach(obstacle => {
            if (obstacle.collision(this.bird)) {
                this.bird.dead = true;
            }
        });

        if (this.bird.dead) {
            return NaN;
        }
        //return something so the animation never stops!
        return [-1, 1];
    }

}

let g = new Game();
document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp' && !g.bird.dead) {
        g.bird.up();
    }
}, false);

g.start();