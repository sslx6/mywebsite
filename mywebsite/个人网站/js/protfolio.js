(function () {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 30,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": ["#fe6913", "#02b7ee", "#11305f", "#dcd203"]
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 10,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 1,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.3,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 5,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 300,
          "color": "#48525d",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );
})();
(function () {
  // window.onload = function () {
  const data = [
    {
      cover: './images/portfolios/1.png',
      title: 'Portfolios 1',
      link: 'https://baidu.com',
      height: 660
    }, {
      cover: './images/portfolios/2.png',
      title: 'Portfolios 2',
      link: 'https://baidu.com',
      height: 330
    },
    {
      cover: './images/portfolios/3.png',
      title: 'Portfolios 3',
      link: 'https://baidu.com',
      height: 745
    },
    {
      cover: './images/portfolios/5.png',
      title: 'Portfolios 5',
      link: 'https://baidu.com',
      height: 745
    },
    {
      cover: './images/portfolios/4.png',
      title: 'Portfolios 4',
      link: 'https://baidu.com',
      height: 330
    },
    {
      cover: './images/portfolios/6.png',
      title: 'Portfolios 6',
      link: 'https://baidu.com',
      height: 330
    },
    {
      cover: './images/portfolios/7.png',
      title: 'Portfolios 7',
      link: 'https://baidu.com',
      height: 660
    },
    {
      cover: './images/portfolios/8.png',
      title: 'Portfolios 8',
      link: 'https://baidu.com',
      height: 330
    },
    {
      cover: './images/portfolios/9.png',
      title: 'Portfolios 9',
      link: 'https://baidu.com',
      height: 745
    },
    {
      cover: './images/portfolios/10.png',
      title: 'Portfolios 10',
      link: 'https://baidu.com',
      height: 330
    },
    {
      cover: './images/portfolios/11.png',
      title: 'Portfolios 11',
      link: 'https://baidu.com',
      height: 745
    },
    {
      cover: './images/portfolios/12.png',
      title: 'Portfolios 12',
      link: 'https://baidu.com',
      height: 330
    },
  ];

  const cols = document.querySelectorAll('.waterfall-wrap ul')
  
  for (let i = 0; i < cols.length; i++) {
    cols[i].height = 0
  }

  data.forEach((item, i) => {
    const minCol = getMinCol()

    minCol.insertAdjacentHTML('beforeend', `
    <li>
    <div id="li-wrap">
     <img src="${item.cover}" alt="" />
     <div id="hover-wrap" class="active">
      <div id="word">
        <p>选项卡特效</p>
        <a href="#"><i class="iconfont qm-link"></i></a>
      </div>
     </div>
    </div>
    </li>
    `)
    minCol.height += item.height + 43
  })

  // function insertImg(minCol) {

  // }

  function getMinCol() {
    let minCol = cols[0]
    for (let i = 1; i < cols.length; i++) {
      // console.log(i, cols[i].offsetHeight, minCol.offsetHeight);
      if (cols[i].height < minCol.height) minCol = cols[i]
    }
    return minCol
  }
  // }
  // const lis = document.querySelectorAll('.waterfall-wrap ul li')
  // const lisDiv=document.querySelectorAll('.waterfall-wrap ul li div')
  // lis.onmouseover=function(){
    
  // lisDiv.classList.add('active')
    
  // }
})();