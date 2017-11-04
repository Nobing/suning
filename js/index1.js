/* 
* @Author: anchen
* @Date:   2017-07-18 23:26:21
* @Last Modified by:   anchen
* @Last Modified time: 2017-07-22 16:14:47
*/


$(function(){
    jQuery(".nav").slide({ 
        type:"menu", //效果类型
        titCell:".m", // 鼠标触发对象
        targetCell:".sub", // 效果对象，必须被titCell包含
        effect:"slideDown",//下拉效果
        delayTime:200, // 效果时间
        triggerTime:200, //鼠标延迟触发时间
        returnDefault:true  //返回默认状态
    });

    $("#nav .tit").slide({
        type:"menu",
        titCell:".mod_cate",
        targetCell:".mod_subcate",
        delayTime:0,
        triggerTime:10,
        defaultPlay:false,
        returnDefault:true
    });

    jQuery(".txtScroll-top").slide({
        mainCell:".bd ul",
        autoPage:true,
        effect:"topLoop",
        scroll:2,
        autoPlay:true,
        vis:4,
        delayTime:1500,
        interTime:5000,
        mouseOverStop:true});
    
    jQuery(".list_box").slide({
        mainCell:".ul1", 
        effect:"leftLoop", 
        prevCell:".list1 #pr",
        nextCell:".list1 #ne",
        vis:5, 
        scroll:5,  
        autoPage:true,
        delayTime:200 });

    jQuery(".list_box").slide({ 
        mainCell:".ul2", 
        effect:"leftLoop", 
        prevCell:".list2 #pr",
        nextCell:".list2 #ne",
        vis:5, 
        scroll:5,  
        autoPage:true,
        delayTime:200 });

})

