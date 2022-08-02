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
  let articleWrap = document.querySelector('#blog .article-wrap');
  // 请求数据
  let url = "http://81.70.162.221:3000/getBlogs";
  axios.get(url).then(function (res) {
    let blogs = res.data;
    blogs.forEach(blog => {
      articleWrap.insertAdjacentHTML('beforeend', `
      <article>
      <a href="blog-single.html?id=${blog.id}"><img src="http://81.70.162.221:3000/${blog.image}" alt=""></a>
      <div class="content-wrap">
        <a href="blog-single.html?id=${blog.id}">
          <h3>${blog.title}</h3>
        </a>
        <p>${blog.desc} </p>
        <div class="flex justify-content-between align-items-center">
          <span class="date"><i class="iconfont qm-clock"></i>${blog.createTime}</span>
          <a class="more" href="blog-single.html?id=${blog.id}">查看更多<i class="iconfont qm-arrow-right"></i></a>
        </div>
      </div>
    </article>
  `);
    });
  })

})()