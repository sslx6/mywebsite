(function () {
    let oContainer = document.querySelector('.carousel');
    let oImgBox = oContainer.querySelector('.imgs');
    let oPrev = oContainer.querySelector('.prev');
    let oNext = oContainer.querySelector('.next');
    let aImgs = oContainer.querySelectorAll('.imgs-wrap');
    let scrollTop = document.querySelector('.scroll-top');
    let html = document.documentElement;
    let moveTimes = aImgs.length - 3;
    let currTime = 0;
    changeBtn();
    oPrev.onclick = oNext.onclick = function () {
        if (this == oPrev) {
            if (currTime > 0) {
                currTime--;
                changeImg()
            }
        } else {
            if (currTime < moveTimes) {
                currTime++;
                changeImg()
            }
        }
    }
    function changeImg() {
        oImgBox.style.left = -((aImgs[0].offsetWidth + 30) * currTime) + 'px';
        changeBtn();
    }
    function changeBtn() {
        if (currTime <= 0) {
            oPrev.classList.add('invalid');
        }else {
            oNext.classList.add('invalid');
        }
        if (currTime > 0) {
            oPrev.classList.remove('invalid');
        }
        if (currTime < moveTimes) {
            oNext.classList.remove('invalid');
        }
    }
    let timer;
    function go() {
        timer = setInterval(() => {
            if (currTime == moveTimes) {
                currTime = -1;
            }
            oNext.onclick();
        }, 2000);
    }
    go();
    oContainer.onmouseover = function () {
        clearInterval(timer);
    };
    oContainer.onmouseout = function () {
        go();
    }
    document.addEventListener('scroll', function() {
        if(html.getBoundingClientRect().bottom - html.clientHeight < 50) {
            
        }
    })
})();
