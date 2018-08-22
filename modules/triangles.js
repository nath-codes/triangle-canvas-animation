import Triangle from "./triangle.js";

class Triangles {
    constructor(context) {
        this.context = context;
        this.amount = 10;
        this.initalWidth = this.getInitialWidth();
        this.triangles = [];
        this.generate();

        this.animate = this.animate.bind(this);
    }

    getInitialWidth() {
        return this.context.canvas.height / this.amount;
    }

    generate() {
        for (let i = 0; i < this.amount; i++) {
            const width = this.initalWidth * i;
            const triangle = new Triangle(
                this.context,
                width,
                this.initalWidth
            );
            this.triangles.push(triangle);
        }
    }

    animate() {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (let i = 0; i < this.triangles.length; i++) {
            this.triangles[i].draw();
        }
        requestAnimationFrame(this.animate);
    }
}

export default Triangles;
