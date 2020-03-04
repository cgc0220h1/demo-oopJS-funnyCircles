let canvas = document.getElementById('main-display');
let ctx = canvas.getContext('2d');
let Circle = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = color;
        ctx.stroke();
        ctx.lineWidth = 1;
    };
    this.move = function () {
        ctx.clearRect(this.x, this.y, 2 * this.radius, 2 * this.radius);
        this.y += 10;
        this.draw();
    }
};

let circle = [];

function ranProp() {
    let result = [];
    result.push(Math.random() * canvas.width);
    result.push(Math.random() * canvas.height);
    result.push(Math.random() * 20);
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    result.push("rgb(" + red + "," + green + "," + blue);
    return result;
}

let index = 0;

function ranObj() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setInterval(function () {
        circle[index] = new Circle(ranProp()[0], ranProp()[1], ranProp()[2], ranProp()[3]);
        circle[index].draw();
        index++;
    },1000);
}