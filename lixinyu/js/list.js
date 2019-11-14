// 引入头部
$("header").load("http://localhost/lixinyu/data.html .top,.bottom");
// 引入导航栏
$("nav").load("http://localhost/lixinyu/data.html .nav");
// 引入基本介绍
$(".synopsis").load("http://localhost/lixinyu/data.html .product");
// 引入尾部
$("footer").load("http://localhost/lixinyu/data.html .myfooter");
$(".all-classify").hover(function(){
    $(this).children(".list").css({"display":"block"});
},function(){
    $(this).children(".list").hide();
})

class List{
    constructor(options){
        this.dom = options.dom;
        this.url = options.url;
        // 发送请求
        this.load();
        // 绑定事件委托
        this.addEvent();
    }
    load(){
        var that = this;
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.display();
        })
    }
    display(){
        var str = "";
        for(var i = 0; i < this.res.length; i++){
            str += `<li class='bookli' index="${this.res[i].id}">
                        <div class="li-img fl">
                            <a href="details.html" target="_blank">
                                <img id="imgbox_6526395" src="${this.res[i].img}" alt="暂无图片" title="${this.res[i].name}"/>
                            </a>
                        </div>
                        <img class="icon1111" src="${this.res[i].img}" />
                        <div class="li-con fl" index="${this.res[i].id}">
                            <h2>
                                <img class="icon1111" src="${this.res[i].img}" /> 
                                <a href="details.html" title="${this.res[i].name}" target="_blank">
                                    <strong> ${this.res[i].name}）</strong>
                                </a>
                            </h2>
                            <dl>
                                <dt>
                                    <div class="line_1">
                                        <div class="marketPrice">
                                            <span class="priceName">定价：</span>
                                            <span class="priceValue">￥${this.res[i].price}</span>
                                        </div>
                                        <div class="memberPrice">
                                            <span class="priceName">广购价：</span>
                                            <span class="priceValue">￥${this.res[i].present}</span>
                                        </div>
                                    </div>
                                    <div class="line_2">
                                        <p>顾客评分</p>
                                            <p class="review_d">
                                                <span>
                                                    <i></i><i></i><i></i><i></i><i></i>
                                                </span>
                                            </p>
                                        </p>
                                    </div>
                                    <div class="line_3">
                                        <span>作者：
                                            <em ><a href="details.html">${this.res[i].author}</a>
                                            </em>&nbsp;
                                            <em ><a href="/ProductList.do?Author=著;">
                                            著;</a>
                                            </em>&nbsp;
                                            著
                                        </span>
                                        <span>出版社：
                                            <em class="cut" title="${this.res[i].author}">
                                            <a href="/ProductList.do?publish=${this.res[i].press}">${this.res[i].press}</a>
                                            </em>
                                        </span>
                                        <span>出版时间：
                                            <em>${this.res[i].time}</em>
                                        </span>
                                    </div>
                                    <div class="line_4">${this.res[i].synopsis}</div>
                                </dt>
                                <dd>
                                    <a class="b_1" href="#">加入购物车</a>
                                    <a href="javascript:;" class="b_2" onClick="addFavor(0,6526395);"> 放入收藏夹 </a>
                                </dd>
                            </dl>
                        </div>
                    </li>`;
        }
        this.dom.innerHTML = str;
    }
    addEvent(){
        var that = this;
        this.dom.onclick = function(eve){
            that.id = $(eve.target).parents(".bookli").attr("index");
            that.setLocalStorage(eve);
        }
    }
    setLocalStorage(eve){
        // 判定点击的是详情页还是购物车
        if(eve.target.className == "b_1"){
            this.goods = JSON.parse (localStorage.getItem("goods"))? JSON.parse (localStorage.getItem("goods")) : [];
            if(this.goods.length == 0){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }else{
                var onoff = true;
                for(var i = 0; i < this.goods.length; i++){
                    if(this.goods[i].id === this.id){
                        this.goods[i].num++;
                        onoff = false;
                    }
                }
            if(onoff){
                this.goods.push({
                    id:this.id,
                    num:1
                })
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
        }
        else{
            this.details = JSON.parse(localStorage.getItem("details"))? JSON.parse(localStorage.getItem("details")) : [];
            if(this.details.length == 0){
                this.details.push({
                    id:this.id,
                })
            }else{
                for(var i = 0; i < this.details.length;i++){
                    if(this.id != this.details[i].id){
                        this.details[i].id = this.id;
                        
                    }
                }
            }
            localStorage.setItem("details",JSON.stringify(this.details));
        }
    }
}
new List({
    dom:document.querySelector(".rightCon .proList ul.list"),
    url:"http://localhost/lixinyu/json/shopping.json",
    
})