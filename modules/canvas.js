import Triangles from "./triangles.js";

class Canvas {
    constructor(canvas) {
        this.canvas = canvas;
        this.canvas.style.background = "black";
        this.context = this.canvas.getContext("2d");
        this.addEventListener();
        this.setCanvasSize();
    }

    setCanvasSize() {
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
    }

    addEventListener() {
        window.addEventListener("resize", () => {
            this.setCanvasSize(this.canvas);
            this.draw();
        });
    }

    draw() {
        const triangles = new Triangles(this.context, 10);
        triangles.animate();
    }
}

export default Canvas;
