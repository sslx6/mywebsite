/* 
    一些公共的函数和功能
    ==================================
  [目录]

    1. 页面初始化，计算rem
    2. 动态插header
    3. 回到顶部
    4. 封装的常用函数
*/

/*--------------------------------------------------------------
  1. 页面初始化，计算rem
--------------------------------------------------------------*/

// 函数立即调用
(function () {
  //页面初始化，针对屏幕不是1920*1080的页面尺寸
  const buildRem = function () {
    let designSize = 1920; // 设计图尺寸            
    let html = document.documentElement;
    let wW = html.clientWidth;// 窗口宽度
    let rem = wW * 100 / designSize;
    html.style.fontSize = rem + 'px';
  }
  // 页面初始化的时候调用
  buildRem()
  // 页面缩放时调用
  window.onresize = buildRem;
  /* 
  1920                 100
  ----------    =   -----------
  你的宽（wW）        你的字体大小
*/
})();

/*--------------------------------------------------------------
  2. 动态插header
--------------------------------------------------------------*/
(function () {
  const header = document.querySelector('#header');
  if (header) {
    const navData = [
      {
        title: "首页",
        url: "index.html",
      },
      {
        title: "作品展示",
        url: "protfolio.html",
      },
      {
        title: "博客",
        url: "blogs.html",
      },
      {
        title: "我的简历",
        url: "about.html",
      },
      {
        title: "联系我",
        url: "contact.html",
      },
    ];
    const insertNav = function () {
      let res = ''
      navData.forEach(nav => {
        res += `<li class="${getPageName() == nav.url ? 'active' : ''}"><a href="${nav.url}">${nav.title}</a></li>`
      })
      return res
    }

    header.insertAdjacentHTML('afterbegin', `
      <div class="container flex align-items-center justify-content-between">
        <a href="./index.html"><img class="logo" src="./images/logo.png" alt=""></a>
        <nav id="navbar" class="navbar">
          <ul>${insertNav()}</ul>
        </nav>
      </div>
    `)
    function getPageName() {
      const pathArr = location.pathname.split('/')
      return pathArr[pathArr.length - 1]
    }
  }
})();
function GetQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
  /*--------------------------------------------------------------
    3. 回到顶部
  --------------------------------------------------------------*/
  (function () {
    let scrollTop = document.querySelector('.scroll-top');
    let html = document.documentElement;
    document.addEventListener('scroll', function () {
      if (!(html.scrollTop < html.clientHeight)) {
        scrollTop.hidden = false;
      } else if (html.scrollTop < html.clientHeight) {
        scrollTop.hidden = true;
      }
    }, false);
    scrollTop.addEventListener('click', function () {
      html.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, false)
  })();
/*--------------------------------------------------------------
  4. 导航条加亮
--------------------------------------------------------------*/

/*--------------------------------------------------------------
  5. 导航条加亮
--------------------------------------------------------------*/

