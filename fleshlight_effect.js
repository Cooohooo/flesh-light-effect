const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const p = {
    x: 0,
    y: 0,
    r: 50,
};

function render() {
    // Gets a reference to the root node of the document.cR
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var radial = ctx.createRadialGradient(p.x, p.y, p.r, p.x, p.y, p.r * 3);
    // 开始点颜色
    radial.addColorStop(0, "rgba(255,255,255,0)");
    // 结束点颜色
    radial.addColorStop(1, "rgba(0,0,0,0.75)");
    ctx.fillStyle = radial;
    // 绘制矩形
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.onmousemove = (e) => {
    p.x = e.clientX;
    p.y = e.clientY;
    render();
};

window.onresize = () => {
    render();
}

render();
