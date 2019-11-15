// 新书上架轮播
    define(["public/animate"],function(){
        class Banner{
            constructor(options){
                this.imgList = options.imgList;
            }
            lunbo(){
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
        return Banner;
    });
    