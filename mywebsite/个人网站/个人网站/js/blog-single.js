(function () {
    let li = document.querySelectorAll('#header ul li');
    li[2].className = 'active';
    let background2 = document.querySelector('.background2');
    let content = document.querySelector('.content');
    let titleTime = document.querySelector('.title-time');
    let commentsBox = document.querySelector('.comments-box');
    let check = document.querySelector('.check');
    let btnPost = document.querySelector('.comment button');
    let nameInput = document.querySelector('.name-input');
    let emailInput = document.querySelector('.email-input');
    let commentInput = document.querySelector('.comment-input');
    let id = location.search.split('=')[1];
    // 请求数据
    let url = "http://81.70.162.221:3000/getBlog?id=" + id;
    axios.get(url).then(function (res) {
        let blog = res.data;
        let commentsList = blog.comments
        let num = 0;
        console.log(blog, commentsList[0]);
        function renderComments(i) {
            commentsBox.insertAdjacentHTML('beforeend', `
            <div id="comments">
                <div class="nickName-time">
                    <div class="nickName">${commentsList[i].nickname}</div>
                    <div class="time">${commentsList[i].commentTime.substring(0, 10)}</div>
                </div>
                <div class="comment-text">
                    ${commentsList[i].content}
                </div>                
            </div>    
            `)
        }
        for (let i = 0; i < 3; i++) {
            renderComments(i);
            num++;
        }
        check.addEventListener('click', function () {
            for (let i = num; i < num + 3; i++) {
                renderComments(i);
            }
        })

        titleTime.insertAdjacentHTML('beforeend', `
        <div class="title">${blog.title}</div>
        <div class="time">发表于：${blog.createTime.substring(0, 10)}</div>
        `);
        content.insertAdjacentHTML('beforeend', `
        <p>${blog.content}</p>
        `);
        background2.insertAdjacentHTML('beforeend', `
        <img src="http://81.70.162.221:3000/${blog.image}" alt="">
        `);
    })
    btnPost.addEventListener('click', function () {
        
        function getTime() {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth()*1 + 1;
            let day = date.getDay();
            if(month < 10) {
                month = '0' +month;
            }
            if(day < 10) {
                day = '0' +day;
            }
            return year + '-' + month + '-' + day;
        }
        getTime();
        commentsBox.insertAdjacentHTML('beforeend', `
            <div id="comments">
                <div class="nickName-time">
                    <div class="nickName">${nameInput.value}</div>
                    <div class="time">${getTime()}</div>
                </div>
                <div class="comment-text">
                    ${commentInput.value}
                </div>                
            </div>    
        `)
        nameInput.value = '';
        emailInput.value = '';
        commentInput.value = '';
        axios.post('http://81.70.162.221:3000/postComment', {
            nickname: nameInput.value,
            email: emailInput.value,
            content: commentInput.value,
            articleId: id
        }).then(function (res) {
            if (res.data == 'success') {
                alert('success');
                console.log('success');
            }
        });
    });
}
)();