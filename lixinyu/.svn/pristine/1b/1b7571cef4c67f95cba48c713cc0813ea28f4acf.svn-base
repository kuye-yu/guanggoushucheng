

// 广告图轮播
$(".banner .banner-c").banner({
    imgs:$(".banner .banner-c").find("img"),     //必传
    autoPlay:true,
    left:$(".banner .banner-c").find("#left"),   //左按钮，可选
    right:$(".banner .banner-c").find("#right"), //右按钮，可选     //是否要自动播放，可选，默认要
    list:true,         //是否要小圆圈，可选
    delayTime:2000,     //可选的，图片播放间隔时间
    moveTime:200,       //可选的，图片移动的时间
});

// 主体边框变色效果
$("main .list li img").hover(function(){
    $(this).css("border", "1px solid #ed1d1d");
},function(){
    $(this).css("border", "1px solid #eae9e9");
})

// 热卖图书和新品图书推荐渲染页面
class Render{
    constructor(options){
        this.dom1 = options.dom1;
        this.dom2 = options.dom2;
        this.dom3 = options.dom3;
        this.url = options.url;
        this.train = document.querySelector(".newBook .new .list .bookList ul"),
        this.leftBtn = document.querySelector(" .newBook .new .list .left");
        this.rightBtn = document.querySelector(" .newBook .new .list .right");
        // 2.开启请求
        this.load();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            // 3.渲染页面
            that.displayHot();
            that.displayNewBook();
            that.displayPromo();
        })
    }
    // 热卖图书渲染页面
    displayHot(){
        var str = "";
        var num = parseInt(Math.random() * (this.res.length-10));
        for(let i = num;i < num + 10;i++){
                str += `
                    <li>
                        <a target="_blank" href="#" title="${this.res[i].bookName}">
                            <img src="${this.res[i].img}" alt="${this.res[i].bookName}" title="${this.res[i].bookName}">
                        </a>
                        <p><a target="_blank" href="#">${this.res[i].bookName}</a></p>
                        <del>原价：￥${this.res[i].original}</del>
                        <span><font>￥${this.res[i].present}</font></span>	
                    </li>
                  `
        }
        this.dom1.innerHTML = str;
        this.hotBorder();
    }
    // 热卖图书变框效果
    hotBorder(){
        $("main .list li img").hover(function(){
            $(this).css("border", "1px solid #ed1d1d");
        },function(){
            $(this).css("border", "1px solid #eae9e9");
        })
    }
    // 新品上架渲染页面
    displayNewBook(){
        var str = "";
        var num = parseInt(Math.random() * (this.res.length-8));
        for(let j= num;j < num + 8;j++){
                str += `
                        <li>
                            <a target="_blank" href="/#" title="${this.res[j].bookName}">
                                <img src="${this.res[j].img}" alt="" title="${this.res[j].bookName}">
                            </a>
                            <p><a target="_blank"href="/#">${this.res[j].bookName}</a></p>
                            <del>原价：￥${this.res[j].original}</del>
                            <span><font>￥${this.res[j].present}</font></span>				   
                        </li>
                  `
        }
        for(let j= num;j < num + 6;j++){
            str += `
                    <li>
                        <a target="_blank" href="/#" title="${this.res[j].bookName}">
                            <img src="${this.res[j].img}" alt="" title="${this.res[j].bookName}">
                        </a>
                        <p><a target="_blank"href="/#">${this.res[j].bookName}</a></p>
                        <del>原价：￥${this.res[j].original}</del>
                        <span><font>￥${this.res[j].present}</font></span>				   
                    </li>
              `
    }
        this.dom2.innerHTML = str;
        this.lunbo();
    }
    // 每周推荐渲染页面
    displayPromo(){
        var str = "";
        var num = parseInt(Math.random() * (this.res.length-5));
        for(let j= num;j < num + 5;j++){
                str += `
                        <li>
                            <a target="_blank" href="/#" title="${this.res[j].bookName}">
                                <img src="${this.res[j].img}" alt="" title="${this.res[j].bookName}">
                            </a>
                            <p><a target="_blank" href="/#">${this.res[j].bookName}</a></p>
                            <del>原价：￥${this.res[j].original}</del>
                            <span><font>￥${this.res[j].present}</font></span>				           
					    </li>
                  `
        }
        this.dom3.innerHTML = str;
    }
    // 新书上架轮播
    lunbo(){
        this.imgList = document.querySelectorAll(".newBook .new .list .bookList ul li");
        this.width = this.imgList[0].clientWidth;
        this.idx = 0;
        this.right();
        this.left();
    }
    right(){
        var that = this;
        this.rightBtn.onclick = function(){
            that.idx++;
            animate(that.train,{left:-that.idx * that.width}, 1000, function(){
               if(that.idx >= that.imgList.length-6){
                    that.idx = 0;
                   that.train.style.left = 0;
               } 

            })

        }
    }
    left(){
        var that = this;
        this.leftBtn.onclick = function() {
            // 信号量改变
            that.idx--;
            // 判定信号量是否小于0 如果小于0 就瞬间切换到最后一张"猫腻"图
            if (that.idx < 0) {
                that.idx = that.imgList.length - 6;
                that.train.style.left = -that.idx * that.width + "px";
                that.idx--; 
            }
            animate(that.train, {left: -that.idx * that.width}, 1000)
        }
    }
}
new Render({
    dom1:document.querySelector(".hot .list ul"),
    dom2:document.querySelector(".newBook .list .bookList ul"),
    dom3:document.querySelector(".promo .list ul"),
    url:"http://localhost/lixinyu/json/hot.json",
    
})
// 推荐图书右侧tab切换效果
class RightTab{
    constructor(options){
        this.dom1 = options.dom1;
        this.dom2 = options.dom2;
        this.url = options.url;
        this.load();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.id = "Menu31";
            that.display();
            // 3.渲染页面
            for(let i = 0; i < that.dom1.length; i++){
                that.dom1[i].onmouseover = function(){
                    that.id = this.getAttribute("index");
                    console.log(that.id);
                    that.display();
                }
            }
        })  
    }
    display(){
        // var that = this;
        var str = "";
        var m = 1;
        for(let i = 0; i < this.res.length; i++){
                if(this.id == this.res[i].id){
                    str += `
                        <li>
                            <i class="top">${m}</i>
                            <a href="#" target="_blank">${this.res[i].name}</a>
                        </li>
                    `
                    m++;
                }
        }
        this.dom2.innerHTML = str;
        // tab栏变色显示和隐藏效果
        $(".column .ranking .rankingNav ul li a").hover(function(){
            var index = $(this).parent().index();
            $(this).parent().addClass("cur").siblings().removeClass("cur");
            $(this).parents(".rankingNav").siblings(".list").children("ul").stop(true).eq(index).fadeIn().siblings().hide();
        },function(){});
    }
}
new RightTab({
    dom1:document.querySelectorAll(".column .ranking .rankingNav ul li a"),
    dom2:document.querySelector(".column .ranking .list ul"),
    url:"http://localhost/lixinyu/json/tab.json"
})

// 推荐图书左侧tab切换效果
class LeftTab{
    constructor(options){
        this.dom1 = options.dom1;
        this.dom2 = options.dom2;
        this.url = options.url;
        this.load();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.id = 1;
            that.display();
            // 3.渲染页面
            for(let i = 0; i < that.dom1.length; i++){
                that.display();
                that.dom1[i].onmouseover = function(){
                    that.id = this.getAttribute("index");
                    // console.log(that.id);
                    that.display();
                }
            }
        })  
    }
    display(){
        // var that = this;
        var str = "";
        var num = parseInt(Math.random() * (this.res.length-6));
        for(let i = num; i < num + 6; i++){
            str += `
                    <li index="${this.id}">
                        <a href="#" target="_blank">
                            <img src="${this.res[i].img}" alt="${this.res[i].bookName}" width="120" height="120">
                        </a>
                        <p><a href="#" target="_blank">${this.res[i].bookName}</a></p>
                        <del>原价:￥${this.res[i].original}</del>				             	
                        <span class="priceValue">￥${this.res[i].present}</span>				             	
                    </li>
                 `;
        this.dom2.innerHTML = str;
        // tab栏变色显示和隐藏效果
        $(".column .leftColumn .sidebarNav ul li").hover(function(){
            var index = $(this).index();
            $(this).addClass("cur").siblings().removeClass("cur");
           $(this).parents(".sidebarNav").siblings(".list").children("ul").stop(true).eq(index).fadeIn().siblings().hide();
        },function(){});
    }
    }
}
new LeftTab({
    dom1:document.querySelectorAll(".column .leftColumn .sidebarNav ul li"),
    dom2:document.querySelector(".column .leftColumn .list ul"),
    url:"http://localhost/lixinyu/json/hot.json"
})

// 更多精彩动画
$(".wonderful ul li").hover(function(){
	$(this).find("img.upper").stop(true).animate({"width":"0","left":"50%"},200);
	$(this).find("img.lower").delay(200).animate({"width":"95px","left":"0"},200);
},function(){
	$(this).find("img.lower").stop(true).animate({"width":"0","left":"50%"},200);
	$(this).find("img.upper").delay(200).animate({"width":"95px","left":"0"},200);
})

// 楼层效果
$(function() {
    $(window).scroll(function() {
      if ($(window).scrollTop() > 50) {
        $(".hm-t-go-top ").fadeIn(200);
      } else {
        $(".hm-t-go-top ").fadeOut(200);
      }
    });
    $(".hm-t-go-top ").hover(function(){
        $(".hm-t-go-top ").css({"backgroundImage":"none"}).html("返回顶部");
        //当点击跳转链接后，回到页面顶部位置
        $(this).click(function() {
            $('body,html').animate({
            scrollTop: 0
            },
            500);
            return false;
        });
    },function(){

    })
});
