const htmlBar = document.querySelector('#htmlBar');
const htmlLog = document.querySelector('#htmllog');
const cssBar = document.querySelector('#cssBar');
const cssLog = document.querySelector('#csslog');
const jsBar = document.querySelector('#jsBar');
const jsLog = document.querySelector('#javascriptlog');
const phpBar = document.querySelector('#phpBar');
const phpLog = document.querySelector('#phplog');
const wordpressBar = document.querySelector('#wordpressBar');
const wordpressLog = document.querySelector('#wordpresslog');
const photoshopBar = document.querySelector('#photoshopBar');
const photoshopLog = document.querySelector('#photoshoplog');

(function () {
    let i = 0
    let timer
    timer = setInterval(() => {
        if (i < 100) {
            i += 1,
                htmlBar.style.width = i + '%',
                htmlLog.innerHTML = i + '%'
        }
        else {
            clearInterval(timer)
        }
    }, 100)
})();
(function () {
    let i = 0
    let timer
    timer = setInterval(() => {
        if (i < 60) {
            i += 1,
                cssBar.style.width = i + '%',
                cssLog.innerHTML = i + '%'
        }
        else {
            clearInterval(timer)
        }
    }, 100)
})();
(function () {
    let i = 0
    let timer
    timer = setInterval(() => {
        if (i < 80) {
            i += 1,
                jsBar.style.width = i + '%',
                jsLog.innerHTML = i + '%'
        }
        else {
            clearInterval(timer)
        }
    }, 100)
})();
(function () {
    let i = 0
    let timer
    timer = setInterval(() => {
        if (i < 80) {
            i += 1,
                phpBar.style.width = i + '%',
                phpLog.innerHTML = i + '%'
        }
        else {
            clearInterval(timer)
        }
    }, 100)
})();
(function () {
    let i = 0
    let timer
    timer = setInterval(() => {
        if (i < 50) {
            i += 1,
                wordpressBar.style.width = i + '%',
                wordpressLog.innerHTML = i + '%'
        }
        else {
            clearInterval(timer)
        }
    }, 100)
})();
(function () {
    let i = 0
    let timer
    timer = setInterval(() => {
        if (i < 70) {
            i += 1,
                photoshopBar.style.width = i + '%',
                photoshopLog.innerHTML = i + '%'
        }
        else {
            clearInterval(timer)
        }
    }, 100)
})();