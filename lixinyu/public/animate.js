function animate(dom, cssObj, duration, callback) {
    // 定义间隔
    var interval = 20;
    // 定义当前状态对象
    var nowObj = {};
    // 循环cssObj
    for (var i in cssObj) {
        nowObj[i] = parseInt(getStyle(dom, i))
    }
    // 定义总次数
    var allCount = duration / interval;
    // 定义计数器
    var count = 0;
    var timer = setInterval(function () {
        count++;
        for (var i in cssObj) {
            // 计算总距离
            var distance = cssObj[i] - nowObj[i];
            // 计算单次步长
            var step = distance / allCount;
            // 赋予样式
            if (i.toLowerCase() === "opacity") {
                dom.style[i] = nowObj[i] + count * step;
            } else {
                dom.style[i] = nowObj[i] + count * step + "px";
            }
        }
        if (count >= allCount) {
            clearInterval(timer);
            // 判断 有回调函数就执行回调函数 没有回调函数就不执行
            if (callback) {
                callback();
            }
            // callback && callback();
        }
    }, interval);
    // 定义获取样式函数
    function getStyle(dom, cssProp) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(dom)[cssProp];
        }
        return dom.currentStyle[cssProp];
    }
};