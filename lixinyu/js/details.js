class Details{
    constructor(options){
        // 数据地址
        this.url = options.url;
        this.headPosition = options.headPosition;
        this.bottomPosition = options.bottomPosition;
        // 读取到所有商品数据
        this.load();
    }
    // 读取所有数据方法
    load(){
        var that = this;
        // 执行ajax
        ajaxGet(this.url,function(res){
            that.res = JSON.parse(res);
            that.getLocalStorage();
        })
    }
    // 查localstorage数据
    getLocalStorage(){
        this.details = JSON.parse(localStorage.getItem("details")) ? JSON.parse(localStorage.getItem("details")) : [];
        this.display();
    }
    // 渲染页面方法 
    display(){
        var str = "";
        var str1 = "";
        // 遍历数据
        for(var i = 0;i < this.details.length;i++){
            // 遍历商品
            for(var j = 0;j< this.res.length;j++){
                // 判断二者id是否相同
                if(this.res[j].id == this.details[i].id){
                    // 计算差价
                   this.difference = this.res[j].price - this.res[j].present;
                   // 渲染页面
                    str += `<div class="breadcrumb">
                                <strong><a href="#">图书</a></strong> &gt;
                                <a href="#">排行畅销</a> &gt;
                                <a href="#">铿锵点书</a>
                            </div>  
                            <div class="container details">
                                <div id="pro_intro" class="pro_intro">
                                    <div class="preview">
                                        <div class="f_spec_n">
                                            <a href="${this.res[j].img}">
                                                <img class="jqzoom" src="${this.res[j].img}" alt="">
                                            </a> 
                                            <div class="box"></div>
                                        </div>
                                        <div id="bigArea" style="background: url(./${this.res[j].img}); background-size:600px 600px;background-repeat:no-repeat"></div>
                                        <div class="f_spec_list" id="thumblist">
                                            <ul>
                                                <li class="tb-selected">
                                                    <a href="#">
                                                        <img src="${this.res[j].img}">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="share">
                                        <div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">
                                            <span class="bds_more">分享：</span>
                                        </div>
                                            <a href="javascript:;" class="share_fav">收藏商品</a>
                                            
                                        </div>
                                    </div>
                                <div class="intro-item">
                                        <h3>
                                            <b>${this.res[j].name}</b>
                                    <font color="red"> </font>
                                        </h3>
                                        <p class="author_p">
                                            <span>I S B N ：<b>${this.res[j].isbn}</b></span>
                                            <span>作&nbsp;&nbsp;&nbsp;&nbsp;者：
                                                <b>
                                                <a target="_blank" href="/ProductList.do?Author=${this.res[j].author}">${this.res[j].author}</a>&nbsp;
                                                <a target="_blank" href="/ProductList.do?Author=著;">著;</a>&nbsp;
                                                </b>
                                            </span>
                                            <span>出 版 社：
                                                <b>
                                                    <a target="_blank" href="/ProductList.do?publish=${this.res[j].press}">${this.res[j].press}</a>
                                                </b>
                                            </span>
                                            <span>出版时间：<b>${this.res[j].time}</b></span>
                                            <span>版&nbsp;&nbsp;&nbsp;&nbsp;次：<b>初版</b></span>
                                            <span>开&nbsp;&nbsp;&nbsp;&nbsp;本：<b>32开</b></span>
                                        </p>
                                        <dl class="price">
                                            <dt>
                                                <i style="letter-spacing:12px;">定价</i>
                                                <del>￥${this.res[j].price}</del>
                                            </dt>
                                            <dd>
                                                <i>广购价</i>
                                                <strong>￥${this.res[j].present}</strong>
                                                <span>( <em>75</em> 折)为您节省</span>
                                                <b>￥${this.difference}</b>
                                            </dd>
                                        </dl>
                                        <dl class="offer">
                                            <div id="coupon" class="clear">
                                                <div class="coupon-top">
                                                    <h6>优惠券共4张</h6>  
                                                </div>
                                                <div class="coupon-list clear">
                                                    <div class="coupon-list1">
                                                        <a id="269600" href="#">
                                                            <form id="alloccard_59104" method="post" action="/mobile/alloccard.do" style="margin:0;" target="allocIfram">
                                                                <span style="height: 24px;line-height: 80px; padding: 28px 12px; font-size: 20px;text-align:center;color: white;    border-right: 1px dotted #fff;">满399减110领取</span> 
                                                            </form>
                                                        </a> 
                                                    </div>
                                                    <div class="coupon-list1">
                                                        <a id="269302" href="javascript:submit_59103()">
                                                            <form id="alloccard_59103" method="post" action="/mobile/alloccard.do" style="margin:0;" target="allocIfram">
                                                                <input type="hidden" name="ruleid" value="269302">
                                                                <input type="hidden" name="type" value="fullcut">
                                                                <span style="height: 24px;line-height: 80px; padding: 28px 12px; font-size: 20px;text-align:center;color: white;    border-right: 1px dotted #fff;">满299减60领取</span> 
                                                            </form>
                                                        </a> 
                                                    </div>
                                                    <div class="coupon-list1">
                                                        <a id="269801" href="javascript:submit_59101()">
                                                            <form id="alloccard_59101" method="post" action="/mobile/alloccard.do" style="margin:0;" target="allocIfram">
                                                                <input type="hidden" name="ruleid" value="269801">
                                                                <input type="hidden" name="type" value="fullcut">
                                                                <span style="height: 24px;line-height: 80px; padding: 28px 12px; font-size: 20px;text-align:center;color: white;    border-right: 1px dotted #fff;">满99减10领取</span> 
                                                            </form>
                                                        </a> 
                                                    </div>
                                                    <div class="coupon-list1">
                                                        <a id="269802" href="javascript:submit_59102()">
                                                            <form id="alloccard_59102" method="post" action="/mobile/alloccard.do" style="margin:0;" target="allocIfram">
                                                                <input type="hidden" name="ruleid" value="269802">
                                                                <input type="hidden" name="type" value="fullcut">
                                                                <span style="height: 24px;line-height: 80px; padding: 28px 12px; font-size: 20px;text-align:center;color: white;    border-right: 1px dotted #fff;">满199减25领取</span> 
                                                            </form>
                                                        </a> 
                                                    </div>
                                                    <div class="shadow" style="display:none;">
                                                        <span class="msg" id="outmsg">领取成功</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </dl>
                                        <div>
                                            <dl class="area-p">
                                                <form id="buyForm">
                                                    <dl id="last-dl">
                                                        <dt>
                                                            <input id="amount" name="jianshu" type="hidden" value="1">
                                                        </dt>
                                                        <dd>
                                                            <a href="#" class="addShop_btn">&nbsp;&nbsp;加入购物车</a>
                                                            <input type="submit" value="立刻购买" class="buy_btn">
                                                        </dd>
                                                    </dl>
                                                </form>
                                                <div id="showIncludeCart"></div>
                                            </dl>
                                        </div>
                                    <div class="clear">
                                    </div>
                                </div>
                            </div>
                            <div class="blank_13">
                            </div>`;
                    str1 += `
                            <div class="item-mt">
                                <h3>《${this.res[j].name}》内容简介</h3>
                            </div>
                            <div class="item-mc">
                                <div class="book-detail-content">
                                    <div style="text-indent:2rem">${this.res[j].synopsis}</div>
                                </div>
                            </div>
                        `    
                }
            }
        }
        // 上树
        this.headPosition.innerHTML = str;
        this.bottomPosition.innerHTML = str1;
        this.carousel();
    }
    carousel(){
        this.wrap = document.querySelector(".preview .f_spec_n");
        this.box = document.querySelector(".box");
        console.log(this.wrap);
        this.bigArea = document.getElementById("bigArea");
        this.init();
        this.r;
        this.mouseX;
        this.mouseY;
        this.elementX;
        this.elementY;
        this.resultX;
        this.resultY;
        this.offset = function offset(dom) {
            // 返回一个对象
            this.obj = {
                left: 0,
                top: 0
            }
            // 先让这个对象加上 dom的自己得到定位父元素的距离
            this.obj.left = dom.offsetLeft;
            this.obj.top = dom.offsetTop;
            // 判定浏览器是否是IE8 
            var isIE8 = window.navigator.userAgent.indexOf("MSIE 8") != -1;
            // // 循环往上走 累加每一个offsetParent的offsetLeft和clientLeft 
            // // 加每一个offsetParent的offsetTop和clientTop
            this.offsetParent = dom.offsetParent;
            while (this.offsetParent != document.body) {
                if (isIE8) {
                    this.obj.left += this.offsetParent.offsetLeft;
                    this.obj.top += this.offsetParent.offsetTop;
                } else {
                    this.obj.left += this.offsetParent.offsetLeft + this.offsetParent.clientLeft;
                    this.obj.top += this.offsetParent.offsetTop + this.offsetParent.clientTop;
                }
                this.offsetParent = this.offsetParent.offsetParent;
            }
            return this.obj;
            }    
    }
    // 初始化方法
    init(){
        this.interImg();
        this.leave();
    }
    interImg(){
        var that= this;
        that.enter();
    }
    // 鼠标进入图片区域 才显示镜片和放大镜
    enter(){
        var that = this;
        this.wrap.onmouseenter = function() {
            that.box.style.display = "block";
            that.bigArea.style.display = "block";
            that.r= (that.wrap.clientWidth - that.box.clientWidth) / (600 - that.bigArea.clientWidth);
            that.move();
        
        }
    }
    // 绑定mousemove事件
    move(){
        var that = this;
        document.onmousemove = function(e) {
            // 计算鼠标在页面中的距离
            
            that.mouseX =  e.pageX;
            that.mouseY = e.pageY;
            // 计算元素在视口中的距离
            that.elementX = that.offset(that.wrap).left;
            that.elementY = that.offset(that.wrap).top;
            // 计算鼠标在元素中的距离
            that.resultX = that.mouseX - that.elementX - that.wrap.clientLeft - that.box.clientWidth / 2;
            that.resultY = that.mouseY - that.elementY - that.wrap.clientTop - that.box.clientHeight / 2;
            if (that.resultX < 0) {
                that.resultX = 0;
            } else if (that.resultX > that.wrap.clientWidth - that.box.clientWidth) {
                that.resultX = that.wrap.clientWidth - that.box.clientWidth;
            }

            if (that.resultY < 0) {
                that.resultY = 0;
            } else if (that.resultY > that.wrap.clientHeight - that.box.clientHeight) {
                that.resultY = that.wrap.clientHeight - that.box.clientHeight;
            }
            that.box.style.left = that.resultX + "px";
            that.box.style.top = that.resultY + "px";
            that.bigArea.style.backgroundPositionX = - that.resultX / that.r + "px";
            that.bigArea.style.backgroundPositionY = - that.resultY / that.r + "px";
            
        }
    }
    leave(){
        var that = this;
        this.wrap.onmouseleave = function(){
            that.box.style.display = "none";
            that.bigArea.style.display = "none";
        }
    }
}
new Details({
    url:"http://localhost/lixinyu/json/shopping.json",
    headPosition:document.getElementById("head_position"),
    bottomPosition:document.getElementById("detail-tag-id-1")
});