/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 19/09/10.
 */

$(document).ready(
    function BGMP(){
        var vid = document.getElementById("bgMusic");
        //获取音频对象
       // var start = 0;
        //定义循环bai的变量du
     //   var times=3;
        //定于循环的次数 zhi
        vid.addEventListener("ended",function() {
            vid.play();
            //启动音频，也就是播放
        // start++;
            //循环
         //  start == times && vid.pause();
            //也就是当循环的变量等于次数的时候，就会终止循环并且关掉音频
        });
        vid.play();
        //启动音频，用于第一次启动
    },
    function BGIM() {
    /**
     * 随机获取背景图片
     */
    var bgNum = 33; // 定义随机数范围 1-10 和图片数量保持一致
     var randomNum = Math.floor(Math.random() * bgNum) + 1;
    // // 拼接图片地址
     var imgUrl = 'https://cdn.jsdelivr.net/gh/MIAIONE/miaione.github.io/pic/' + randomNum + '.png';
    // // 替换页面中的背景图片地址
    $("header").css("background-image", "url(" + imgUrl + ")"); 
    /**
     * 底部年份动态化
     */
    $('.year').html(new Date().getFullYear());
}
);
