// 获取class为time的元素
const time = document.querySelector('.time');
// 获取class为btn的元素
const btn = document.querySelector('.btn');

// 更改时间
time.innerText = getNowTime()
setInterval(() => {
    time.innerText = getNowTime()
}, 1000)

//获取当前时间
function getNowTime() {
    let date = new Date();
    //年 getFullYear()：四位数字返回年份
    let year = date.getFullYear();  //getFullYear()代替getYear()
    //月 getMonth()：0 ~ 11
    let month = date.getMonth() + 1;
    //日 getDate()：(1 ~ 31)
    let day = date.getDate();
    //时 getHours()：(0 ~ 23)
    let hour = date.getHours();
    //分 getMinutes()： (0 ~ 59)
    let minute = date.getMinutes();
    //秒 getSeconds()：(0 ~ 59)
    let second = date.getSeconds();

    return (// year
        // + '-' + zeroFill(month)
        // + '-' + zeroFill(day)
        // +'' + zeroFill(hour)
        // + ':' + zeroFill(minute)
        // + ':' + zeroFill(second)
        zeroFill(hour) + ':' + zeroFill(minute) + ':' + zeroFill(second))
}

// 补 0
function zeroFill(num) {
    return num.toString().padStart(2, "0")
}

const randomText = '1.23.2020,3.17.2020,3.23.2020-6.24.2020,7.7.2020,7.31.2020,8.10.2020,9.1.2020-10.1.2020,11.23.2020,12.15.2020,12.26.2020,1.1.2021,3.8.2021,4.3.2021,6.2.2021,3.21.2022,5.9.2022'

const randomTextArr = randomText.split(',')

let index = 0

console.log(window.innerWidth, '当前的宽度')
console.log(window.innerHeight, '当前的高度')

// 获取随机值 , 包含最大的和最小的
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
}

// 点击按钮后随机在屏幕随机位置上创建一个p标签,p标签的内容为123,并且插入到 body 中
btn.addEventListener('click', () => {

    // 判断 index 的值是否已经超出了randomTextArr的长度 - 1
    if (index >= randomTextArr.length - 1) {
        index = 0
    }

    index++
    let p = document.createElement('p');
    p.style.opacity = '0';
    p.innerText = randomTextArr[index]
    p.className = 'randomText'

    let width = getRandomIntInclusive(100, window.innerWidth - 100)
    let height = getRandomIntInclusive(100, window.innerHeight - 100)

    p.style.left = Math.ceil(width) + 'px';
    p.style.top = Math.ceil(height) + 'px';

    document.body.appendChild(p);
    setTimeout(() => {
        p.style.opacity = '1';
    }, 0)
})
