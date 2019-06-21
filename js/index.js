$(function () {
    $(window).on("resize", function () {
        //获取窗口的宽度
        let clientW = $(window).width();
        //判断是否大于临界值，布尔值
        let showBig = clientW >= 640;

        //获取item
        let $allitems = $("#carousel-generic .pic");
        // console.log($allitems);
        //遍历
        $allitems.each(function (index, pic) {
            //获取图片路径
            let src = showBig ? $(pic).data("img-lg") : $(pic).data("img-sm");//三元判断，为真选前者，为假选后者
            let imgurl = 'url("'+src+'")';

            //设置背景
            $(pic).css({
                backgroundImage: imgurl
            });

            //设置img标签
            if (!showBig){//当窗口尺寸<640时加载小图片
                let img = '<img src="'+src+'" class="img-responsive" alt="Responsive image">';
                //$(".item .pic").remove(img).append(img);
                $(pic).empty().append(img);
            }else {//当窗口尺寸>=640时清空小图片，加载大图片
                $(pic).empty();
            }
        });
    });

    $(window).trigger("resize");//刚打开页面时自动执行一次上面的程序，否则图片将不显示，直到窗口尺寸改变

    /*动态处理宽度，显示滚动条*/
    // $(window).on('resize',function () {
    //     let $ul = $('#product .nav');
    //     let $allli = $("[role='presentation']",$ul);
    //
    //     let totalW = 0;
    //     //遍历
    //     $allli.each(function (index, item) {
    //         totalW += $(item).width();
    //     })
    //
    //     let parentW = $ul.parent().width();
    //     //判断
    //     if (totalW > parentW) {
    //         $ul.css({
    //             width: totalW + 'px'
    //         })
    //     }else{
    //         $ul.removeAttr("style");
    //     }
    // })

    /*点击导航自动跳转到对应位置*/
    let alllis = $("#navbar-collapse li");
     $(alllis[0]).on("click",function () {
         $("body").animate({scrollTop: $("#aboutus").offset().top },1000);
     });

     /*回到顶部按钮*/
    $(".backtotop").fadeOut();
    $(window).scroll(function () {
        if ($(window).scrollTop()>500){
            $(".backtotop").fadeIn();
        } else{
            $(".backtotop").fadeOut();
        }
    });


});

//修改轮播图时间间隔的第二种方法
// $(function () {
//     $("#carousel-generic").carousel({interval: 2000});
// });

/*鼠标悬停时提示内容*/
$(function () {
    $('[data-toggle~="tooltip"]').tooltip()/*[data-toggle~="tooltip"] 选择 data-toggle 属性包含单词 "tooltip" 的所有元素*/
})
/*随着窗口向下滚动时对应导航栏下划线变亮*/
$(function () {
    $('body').scrollspy({
        target: '#navbar-collapse',
        offset: 100
    })
})

