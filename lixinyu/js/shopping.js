class Car{
    constructor(options){
        // 数据地址
        this.url = options.url;
        this.tbody = options.tbody;
        // this.allBtn = options.allBtn;
        // this.totalPrice = options.totalPrice;
        // this.totalSum = options.totalSum;
        // this.allDelete = options.allDelete;
        // 初始化总价和总数量
        this.money = 0;
        this.quantity = 0;
        // 读取到所有商品数据
        this.load();
         // 事件委托绑定事件
        // this.addEvent();
        // this.Delete();
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
    // 查localstorage数据方法
    getLocalStorage(){
        this.goods = JSON.parse(localStorage.getItem("goods")) ? JSON.parse(localStorage.getItem("goods")) : [];
        this.display();
    }
    // 渲染页面方法 
    display(){
        var str = "";
        // 遍历数据
        for(var i = 0;i < this.res.length;i++){
            // 遍历商品
            for(var j = 0;j< this.goods.length;j++){
                console.log(this.res[j].id);
                // 判断二者id是否相同
                if(this.res[i].id === this.goods[j].id){
                    console.log(this.res[i].id)
                    // this.sum = this.goods[j].num * this.res[i].price;
                   // 渲染页面
                    str += `<tr>
                                <td class="t1">
                                    <label><img src="${this.res[i].img}"></label>
                                </td>
                                <td class="td2">
                                    <p>
                                        <a href="#" target="_blank" title="${this.res[i].name}</a>
                                    </p>
                                    <div class="selectPresent"></div>
                                    <p></p>
                                </td>
                                <td class="td3">￥${this.resz[i].price}(74折)</td>
                                <td class="td5">￥${this.resz[i].present}</td>
                                <td class="td6">
                                    <div class="num">
                                            <i class="add fl" alt=""></i>
                                            <input type="text">
                                            <i class="sub fr" alt=""></i>
                                        </div>
                                </td>
                                <td class="td7">
                                    <a href="#">删除</a>
                                </td>
                            </tr>`;
                    //  // 单个价钱，总价，总数相应增加
                    this.quantity += (this.goods[j].num - 0);
                    this.money += (this.sum - 0);
                //    this.zongHe(this.sum);
                }
            }
        }
        // 上树
        // this.totalPrice.innerHTML = `总价：${this.money}`;
        // this.totalSum.innerHTML = `总数量：${this.quantity}`;
        this.tbody.innerHTML = str;
    }
    // 绑定事件方法
    addEvent(){
        var that = this;
        // 点击删除
        this.tbody.addEventListener("click",function(eve){
           that.strikeOut(eve);
        })
        // 点击改变商品数量
        this.tbody.addEventListener("input",function(eve){
            that.changeSum(eve);
        })
        // 全选按钮设置方法
        // this.allBtn.onclick = function(){
        //     that.btns = document.querySelectorAll(".btn");
        //     // console.log(that.btns);
        //     for(var i = 0; i < that.btns.length; i++){
        //         that.btns[i].checked = that.allBtn.checked;
        //     }

        // }
    //    单选设置按钮
        
        // this.tbody.addEventListener("click", function(eve){
        //     this.goods = localStorage.getItem("goods") ? JSON.parse(localStorage.getItem("goods")) : [];
        //     if(eve.target.className == "btn"){
        //         for(var i = 0; i < this.goods.length; i++){
        //             // that.quantity += (eve.target.num - 0);
        //             // that.money += (this.sum - 0);
        //             if(!this.goods[i].checked){
        //                 that.allBtn.checked = false;
        //                 return;
        //             }
        //             that.allBtn.checked = "true";

                    
        //         }
        //     }
            
        // })
    }
    updateLocalStorage(cb){
       for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id === this.id){
               cb(i);
            }
        }
        localStorage.setItem("goods",JSON.stringify(this.goods))
    }
    // 清除所有数据方法
    Delete(){
        var that = this;
        this.allDelete.onclick = function(){
            that.tbody.innerHTML = "";
            localStorage.removeItem("goods")
            that.totalPrice.innerHTML = `总价：0`;
            that.totalSum.innerHTML = `总数量：0`;
        }
    }
    // 删除方法
    strikeOut(eve){
        if(eve.target.tagName == "SPAN"){
            this.id = eve.target.parentNode.parentNode.getAttribute("index");
            eve.target.parentNode.parentNode.remove();
            var that = this;
            this.updateLocalStorage(function(i){
                that.goods.splice(i,1);
                // 将总价和总数量清空重新渲染
                that.quantity = 0;
                that.money = 0;
                that.display();
            });
        }
    }
    // 改变商品数量方法
    changeSum(eve){
        if(eve.target.className == "number"){
                this.id = eve.target.parentNode.parentNode.getAttribute("index");
                var that = this;
                this.updateLocalStorage(function(i){
                    that.goods[i].num = eve.target.value;
                    that.quantity = 0;
                    that.money = 0;
                    that.display();
                });
            }
    }   
}
new Car({
    url:"http://localhost/lixinyu/json/shopping.json",
    tbody:document.querySelector("tbody"),
    // allBtn:document.getElementById("allbtn"),
    // totalPrice:document.getElementById("total-price"),
    // totalSum:document.getElementById("total-sum"),
    // allDelete:document.getElementById("allDelete")
})
