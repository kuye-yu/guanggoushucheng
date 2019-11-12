class List{
    constructor(options){
        this.dom = options.dom;
        this.url = options.url;
        this.load();
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
            str += `<li class='bookli'>
                        <div class="li-img fl">
                            <a href="shopping.html" target="_blank">
                                <img id="imgbox_6526395" src="${this.res[i].img}" alt="暂无图片" title="${this.res[i].name}"/>
                            </a>
                        </div>
                        <img class="icon1111" src="${this.res[i].img}" />
                        <div class="li-con fl" index="${this.res[i].id}">
                            <h2>
                                <img class="icon1111" src="${this.res[i].img}" /> 
                                <a href="/Product.do?id=6526395" title="${this.res[i].name}" target="_blank">
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
                                            <em ><a href="/ProductList.do?Author=[英]${this.res[i].author}">${this.res[i].author}</a>
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
                                    <a class="b_1" href="javascript:;">加入购物车</a>
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
            console.log(that.res);
            if(eve.target.className == "b_1"){
                that.id = eve.target.parentNode.parentNode.parentNode.getAttribute("index");
                console.log(that.id);
                that.setLocalStorage();
            }
        }
    }
    setLocalStorage(){
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
}
new List({
    dom:document.querySelector(".rightCon .proList ul.list"),
    url:"http://localhost/lixinyu/json/shopping.json",
    
})