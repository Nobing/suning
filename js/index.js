/* 
* @Author: anchen
* @Date:   2017-07-14 15:16:30
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-24 15:37:07
*/

$(document).ready(function(){
    var aa = 0;
    var bb = 0;
    var i=0;
    var timeOut;
    
    $('.top_btn1').click(function(event) {
        
        aa++;
            $(this).removeClass('top_btn1').addClass('top_btn2');
            $('.top_box').stop().animate({height:'0'}, 200)
                if (aa>1){
                    aa=0;
            $(this).removeClass('top_btn2').addClass('top_btn1');
            $('.top_box').stop().animate({height:'100'}, 200)
        }
        
    });

    $('#m1').hover(function() {
        $('#m1>a').css('cursor', 'default');
        $('#m1 span').css('color', '#666');
    });
    $('#m7').hover(function() {
        $('#m7>a').css('cursor', 'default');
        $('#m7 span').css('color', '#666');
    });
    $('#m8').hover(function() {
        $('#m8 em').css('color', '#666');
    });

    $('.menu ul li').each(function(index, el) {
        $(this).hover(function() {
            $(this).children('.up').stop().animate({bottom:'0'}, 300);
        }, function() {
            $(this).children('.up').stop().animate({bottom:'-8'}, 300);
        });
    });

    
    // 轮播
        
    // 显示第一张
    $(".pic li").eq(0).show();
    //鼠标滑过手动切换，淡入淡出
    $("#position li").each(function(index, el) {
        $(this).mouseover(function() {
            
            var that=index;
            
            if(timeOut){
                clearTimeout(timeOut);
                timeOut=null;
            }
            timeOut=setTimeout(function(){
                
            $("#position li").eq(that).addClass('cur').siblings().removeClass("cur");
        
                i = that;//不加这句有个bug，鼠标移出小圆点后，自动轮播不是小圆点的后一个
            //$(".pic li").eq(index).show().siblings().hide();
            $(".pic li").eq(that).fadeIn().siblings().fadeOut();
            
            },300)
            
        });
    });
    //自动轮播
    
    var timer=setInterval(play,5000);
    //向右切换
    // var play=function(){
    function play(){
        i++;
        i = i > 7 ? 0 : i ;
        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).stop(true,true).fadeIn(1000).siblings().stop(true,true).fadeOut(1000);
    }
    //向左切换
    function playLeft(){
        i--;
        i = i < 0 ? 7 : i ;

        $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
        $(".pic li").eq(i).stop(true,true).fadeIn(1000).siblings().stop(true,true).fadeOut(1000);
    }
    //鼠标移入移出效果
    $(".pic li img").hover(function() {
        clearInterval(timer);
    }, function() {
        timer=setInterval(play,5000);
    });
    //左右点击切换
    $("#prev").click(function(){
        playLeft();
    })
    $("#next").click(function(){
        play();
    })
    // play();
    // setInterval(play,5000);

    $('.pic li a,#position,.arrow').hover(function() {
        $('.arrow').show();
    }, function() {
        $('.arrow').hide();
    });

    $('.adlet1 a').hover(function() {
        $('.ac1').css('opacity', '0.9');
    }, function() {
        $('.ac1').css('opacity', '0.8');
    });

    $('.adlet2 a').hover(function() {
        $('.ac2').css('opacity', '0.9');
    }, function() {
        $('.ac2').css('opacity', '0.8');
    });


    $(".buy_tab a").each(function(index, el) {
        $(this).mouseover(function() {
            
            var tab=index;
            
            if(timeOut){
                clearTimeout(timeOut);
                timeOut=null;
            }
            timeOut=setTimeout(function(){
                
            $(".buy_tab a").eq(tab).addClass('current').siblings().removeClass("current");
            $(".list_box").children('div').eq(tab).show().siblings().hide();
            },150)
        });
    });

    // function animate (offset) {
    //     var left = parseInt($('.list1').children('ul').css('left')) + offset;
    //     if (offset>0) {
    //         offset = '+=' + offset;
    //     }
    //     else {
    //         offset = '-=' + Math.abs(offset);
    //     }
    //     $('.list1').children('ul').animate({'left': offset}, 200, function () {
    //         if(left > 0){
    //             $('.list1').children('ul').css('left', -2000);
    //         }
    //         if(left < -2000) {
    //             $('.list1').children('ul').css('left', 0);
    //         }
    //     });
    // }

    // $(".list1 #pr").click(function(){
    //     animate(1000);
    // })

    // $(".list1 #ne").click(function(){
    //     animate(-1000);
    // })

    $('.list_box').hover(function() {
        $('.buy_arr').show();
    }, function() {
        $('.buy_arr').hide();
    });

    $(".com_tab li").each(function(index, el) {
        $(this).mouseover(function() {
            
            var tab=index;
            
            if(timeOut){
                clearTimeout(timeOut);
                timeOut=null;
            }
            timeOut=setTimeout(function(){
                
            $(".com_tab li").eq(tab).addClass('com_cur').siblings().removeClass("com_cur");
            $(".com_list").children('ul').eq(tab).show().siblings().hide();
            // $(".list_box").children('div').eq(tab).css('display', 'block').siblings().css('display', 'none');
            
            },150)
            
        });
    });

        $('.rtt_log i').hover(function() {
            $(this).css({
                backgroundColor: '#ffaa01',
                backgroundPosition: '-26px 0'
            });
        }, function() {
            $(this).css({
                backgroundColor: '#383838',
                backgroundPosition: '0 0'
            });
        });
    
    $('.rtt_select div a').each(function(index, el) {
        var num = -23*(index+1)-1;
        $(this).hover(function() {
            $(this).children('i').css({
                backgroundColor: '#ffaa01',
                backgroundPosition: '-26px '+num+'px'
            });
            $(this).children('span').stop().animate({left:'-47'}, 300).css({
                backgroundColor: '#ffaa01',
                color: '#383838'
            });
        }, function() {
            $(this).children('i').css({
                backgroundColor: '#383838',
                backgroundPosition: '0 '+num+'px'
            });
            $(this).children('span').stop().animate({left:'0'}, 300).css({
                backgroundColor: '#383838',
                color: '#ffaa01'
            });
        });
    });

    $('.rtd div a').each(function(index, el) {
        var num = -23*(index+5)-2;
        $(this).hover(function() {
            $(this).children('i').css({
                backgroundColor: '#ffaa01',
                backgroundPosition: '-26px '+num+'px'
            });
            $(this).children('span').stop().animate({left:'-73'}, 300).css({
                backgroundColor: '#ffaa01',
                color: '#383838'
            });
        }, function() {
            $(this).children('i').css({
                backgroundColor: '#383838',
                backgroundPosition: '0 '+num+'px'
            });
            $(this).children('span').stop().animate({left:'0'}, 300).css({
                backgroundColor: '#383838',
                color: '#ffaa01'
            });
        });
    });

    $('.rtd .rtt_sig').click(function(event) {
        $('body,html').stop().animate({'scrollTop':0}, 500);
    });
});