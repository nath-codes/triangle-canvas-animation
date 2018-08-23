class Triangle {
  constructor(context, width, spacer, isStatic) {
    this.context = context;
    this.isStatic = isStatic;
    this.lineWidth = 5;
    this.maxWidth = this.context.canvas.height;
    this.originalWidth = width;
    this.spacer = spacer;
    this.strokeStyle = "rgba(212, 72, 139)";
    this.width = width;
  }

  draw() {
    if (!this.isStatic) {
      this.update();
    }
    const horizontalCenter = this.context.canvas.width / 2;
    const halfTriangleWidth = this.width / 2;
    const verticalCenter = this.context.canvas.height / 2 + this.spacer;

    this.context.beginPath();
    this.context.moveTo(horizontalCenter, verticalCenter - halfTriangleWidth);
    this.context.lineTo(
      horizontalCenter + halfTriangleWidth,
      verticalCenter + halfTriangleWidth / 2
    );
    this.context.lineTo(
      horizontalCenter - halfTriangleWidth,
      verticalCenter + halfTriangleWidth / 2
    );
    this.context.lineTo(horizontalCenter, verticalCenter - halfTriangleWidth);
    this.context.strokeStyle = this.getStrokeStyle();
    this.context.lineWidth = this.lineWidth;
    this.context.closePath();
    this.context.stroke();
  }

  getStrokeStyle() {
    const opacity = this.isStatic ? 0.8 : (this.width / 1000).toFixed(1);
    return `rgba(212, 72, 139, ${opacity})`;
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
