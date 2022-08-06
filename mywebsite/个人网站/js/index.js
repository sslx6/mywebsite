(function () {
    let oContainer = document.querySelector('.carousel');
    let oImgBox = oContainer.querySelector('.imgs');
    let oPrev = oContainer.querySelector('.prev');
    let oNext = oContainer.querySelector('.next');
    let aImgs = oContainer.querySelectorAll('.imgs-wrap');
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
        } else {
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



    const articleWrap = document.querySelector('#blog .article-wrap')
    const url = 'http://81.70.162.221:3000/getBlogs'
    let totalPage = 0
    let pageNum = GetQueryString('pageNum') || 1
    console.log(GetQueryString('pageNum'));
    fetchData()
    function fetchData() {
        axios.get(url, {
            params: {
                pageNum: pageNum,
                pageSize: 6
            }
        }).then(function (response) {

            // totalPage = response.data.totalPage
            // ininitialPagination()

            let blogs = response.data.data
            totalPage = response.data.totalPage
            ininitialPagination()

            console.log(response);
            blogs.forEach(blog => {
                articleWrap.insertAdjacentHTML('beforeend', `
                <article>
                <a href="blog-single.html?id=${blog.id}"><img src="http://81.70.162.221:3000/${blog.image}" alt=""></a>
                <div class="content-wrap">
                    <a href="blog-single.html?id=${blog.id}">
                        <h3>${blog.title}</h3>
                    </a>
                    <p>${blog.abstract} </p>
                    <div class="flex justify-content-between align-items-center">
                        <span class="date"><i class="iconfont qm-clock"></i>${blog.createTime}</span>
                        <a class="more" href="blog-single.html?id=${blog.id}">查看更多<i class="iconfont qm-arrow-right"></i></a>
                    </div>
                </div>
                </article>
                `)

            })
            function ininitialPagination() {
                const ul = document.querySelector('#pagination')
                const prev = document.createElement('li')
                prev.innerHTML = `<a href="index.html?pageNum=${pageNum - 1}"><i class="iconfont qm-arrow-right"></i></a>`;
                ul.appendChild(prev)

                for (let i = 1; i <= totalPage; i++) {
                    const li = document.createElement('li')
                    console.log(pageNum == i);
                    li.className = `${pageNum == i ? 'begin' : ''}`
                    li.innerHTML = `<a href="index.html?pageNum=${i}" aria-controls="dataTableExample" data-dt-idx="1"
                    tabindex="0">${i}</a>`
                    ul.appendChild(li)
                }

                const next = document.createElement('li')
                next.innerHTML = `<a href="index.html?pageNum=${Number(pageNum) + 1}"><i class="iconfont qm-arrow-right"></i></a>`
                ul.appendChild(next)
                console.log(pageNum);
            }
        })
    }

})();