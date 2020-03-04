let canvas = document.getElementById('main-display');
let ctx = canvas.getContext('2d');
let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0,2*Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = color;
    };
};

function ranProp() {
    let result = [];
    result.push(Math.random() * canvas.width);
    result.push(Math.random() * canvas.height);
    result.push(Math.random() * 20);
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    result.push("rgb(" + red + "," + green + ","+blue);
    return result;
}

function ranObj () {
    for (let index = 0; index < 30; index++) {
        let circle = new Circle(ranProp()[0],ranProp()[1],ranProp()[2],ranProp()[3]);
        circle.draw();
    }
}
