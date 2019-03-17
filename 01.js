/**
 * Created by 14486 on 2019/3/17.
 */
// 原生JS拖拽三事件 按下移动 抬起
box.onmousedown = function (e) {
    e = e || window.event;
    var x = e.clientX;
    var y = e.clientY;
    var left = box.offsetLeft;
    var top = box.offsetTop;
    document.onmousemove = function (e) {
        e = e || window.event;
        // 优化 cssText
        box.style.cssText = `left:${e.clientX - x + left}px;top:${e.clientY - y + top}px`;
        //box.style.top = e.clientY - y + top + "px";
        //box.style.left = e.clientX - x + left + "px";
    };
    document.onmouseup = function () {
        this.onmouseup = this.onmousemove = null;
    }
}
// H5的拖拽
let j ,k ,i,Left,Right;
box1.ondragstart = function (e) {
    e = e || window.event;
    j = e.clientX - box1.offsetLeft;
    i = e.clientY - box1.offsetTop;
};
box1.ondragend = function (e) {
    e = e || window.event;
    box1.style.cssText = `left:${e.clientX - j}px;top:${e.clientY - i}px;`;
};

