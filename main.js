/**
 * Created by Noisky on 17/05/13.
 * Revised by Noisky on 19/09/10.
 */
function Orderprocessing1(){
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
}
$(document).ready(function () {
    /**
     * 随机获取背景图片
     */
    // var bgNum = 10; // 定义随机数范围 1-10 和图片数量保持一致
    // var randomNum = Math.floor(Math.random() * bgNum) + 1;
    // // 拼接图片地址
    // var imgUrl = './Noisky_files/img/background-image/bg-' + randomNum + '.jpg';
    // // 替换页面中的背景图片地址
    // $("header").css("background-image", "url(" + imgUrl + ")");

    /**
     * 移动端下拉菜单栏
     */
    var nw = $('.navigation-wrapper');

    // 定义菜单关闭事件
    function bounceOutUp() {
        nw.on(function () {
            nw.toggleClass('visible animated bounceOutUp');

        });
        nw.toggleClass('animated bounceInDown animated bounceOutUp');
    }

    // 根据菜单状态定义单击的操作
    $('.btn-mobile-menu').click(function () {
        if (nw.css('display') === "block") {
            bounceOutUp();
        } else {
            nw.toggleClass('visible animated bounceInDown');
        }
        if ($('.footer').css('display') === "block") {
            // 显示下拉框的时候，隐藏 footer 防止出现冲突
            $('.footer').css('display', 'none');
            // 导航改成绝对定位，实现可以滚动
            $('.navigation-wrapper').css('position', 'absolute');
            $('.panel-main').css('position', 'absolute')
        } else {
            // 收起下拉框的时候，取消改动
            $('.footer').css('display', 'block');
            $('.navigation-wrapper').css('position', 'fixed');
            $('.panel-main').css('position', 'fixed')
        }
        $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
    });
    // 点击下拉菜单以外的其他标签区域收起菜单生效
    $(".panel-main").on('click', ':not(.mobile,.btn-mobile-menu,.navigation-wrapper)', function () {
        if (nw.hasClass("bounceInDown")) {
            bounceOutUp();
            $('.btn-mobile-menu_icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
        }
        $('.footer').css('display') === "none" ? $('.footer').css('display', 'block') : "";
        $('.panel-main').css('position') === "absolute" ? $('.panel-main').css('position', 'fixed') : "";
        $('.navigation-wrapper').css('position') === "absolute" ? $('.panel-main').css('position', 'fixed') : ""
    });
    // 阻止冒泡事件执行
    nw.click(function (event) {
        event.stopPropagation();
    });
    /**
     * 底部年份动态化
     */
    $('.year').html(new Date().getFullYear());
});
