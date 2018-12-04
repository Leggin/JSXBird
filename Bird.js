class Bird {

    constructor(board, x, y) {
        this.width = 1;
        this.movingFunction = this.movingFunction.bind(this);
        this.x = x;
        this.y = y;

        this.point = board.create('point', [() => { return this.x }, () => { return this.y }], { strokeColor: "#555555", fillColor: "#888888", withLabel: false, size: 7 });

        this.gravity = -0.078;
        this.lift = 2;
        this.velocity = 0;

        this.brain = new BrainNN(5, 4, 1);
        this.dead = false;
    }

    addVerticalForce(force) {
        this.velocity += force;
    }

    update() {
        this.addVerticalForce(this.gravity);
        this.velocity = Utilities.limit(this.velocity, 1);
        this.y += this.velocity;
    }

    run() {
        this.point.moveAlong(this.movingFunction, 0);
    }

    movingFunction(time) {
        this.update();
        if (this.isDead() || time > 100) {
            return NaN;
        }
        return [this.x, this.y];
    }

    isDead() {
        if (this.y < -30 || this.y > 0) {
            return true;
        }
        return false;
    }

    up() {
        if ((this.y < this.topBound)) {
            return;
        }
        this.addVerticalForce(this.lift);
    }
}
