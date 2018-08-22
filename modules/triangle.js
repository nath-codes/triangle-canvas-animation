class Triangle {
    constructor(context, width, initialWidth) {
        this.context = context;
        this.initialWidth = initialWidth;
        this.maxWidth = this.context.canvas.height;
        this.width = width;
    }

    draw() {
        this.update();
        const horizontalCenter = this.context.canvas.width / 2;
        const halfTriangleWidth = this.width / 2;
        const verticalCenter =
            this.context.canvas.height / 2 + this.initialWidth;

        this.context.beginPath();
        this.context.moveTo(
            horizontalCenter,
            verticalCenter - halfTriangleWidth
        );
        this.context.lineTo(
            horizontalCenter + halfTriangleWidth,
            verticalCenter + halfTriangleWidth / 2
        );
        this.context.lineTo(
            horizontalCenter - halfTriangleWidth,
            verticalCenter + halfTriangleWidth / 2
        );
        this.context.lineTo(
            horizontalCenter,
            verticalCenter - halfTriangleWidth
        );
        this.context.strokeStyle = "white";
        this.context.lineWidth = "5";
        this.context.closePath();
        this.context.stroke();
    }

    update() {
        if (this.width > this.maxWidth) {
            this.width = 0;
        } else {
            this.width += 1;
        }
    }
}

export default Triangle;
