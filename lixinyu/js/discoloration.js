

//  头部 收购商城 登录 注册 企业官网 订单...悬浮变色效果

$("a").hover(function(){
    $(this).addClass("selected");
},function(){
    $(this).removeClass("selected");
});
    

 //头部地址导航显示和隐藏
$("header .top .address").hover(function() {
     $(this).find("span").css("background", "none");
    $(this).find(".areamini").css("background-color", "#fff");
    $(this).find("ul").show();
}, function() {
    // $(this).find("span").css("background", "url(../images/addr-select-down.png)");
    $(this).find(".areamini").css("background-color", "#f1f1f1");
    $(this).find("ul").hide();
});
//头部地址导航切换
$("header .top .address ul li a").click(function() {
    $(this).addClass("selected").parent().siblings().children().removeClass("selected");
    var selectedAddr = $(this).text();
    $("header .top .address span").text(selectedAddr);
});

//头部轮播图
$(".swiper-container").banner({
    imgs:$(".swiper-container").find("img"),     //必传
    autoPlay:true,     //是否要自动播放，可选，默认要
    list:false,         //是否要小圆圈，可选
    delayTime:3000,     //可选的，图片播放间隔时间
    moveTime:200,       //可选的，图片移动的时间
});

// 表单输入功能
$("#topKeywords").on("focus", function(){
    $("#topKeywords").get(0).value = "";
});
// 表单搜索功能
$("#topsearch").on("click", function(){
    var keyword = $("#topKeywords").val();
    if(keyword==""){
		alert("关键字不能为空！");
		return false;
	}else if(keyword.length < 2){
		alert("关键字太短了！");
        return false;
	}else if(keyword.length > 50){
        alert("关键字太长了！");
        return false;
	
	}
});
// 导航条悬浮功能
$("nav ul li").hover(function(){
    $(this).addClass("cur").siblings().removeClass("cur").parent().find("li").first().addClass("cur");
    // $(this).find(".areamini").css("background-color", "#fff");
    // $(this).find("ul").show();
},function(){
    $(this).removeClass("cur").parent().find("li").first().addClass("cur");
});