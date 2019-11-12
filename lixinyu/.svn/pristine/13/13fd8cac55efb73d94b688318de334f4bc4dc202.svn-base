// 用户注册
class Logon{
    constructor(options){
        this.registerBtn =  options.registerBtn;
        this.email= options.email;
        this.pass1 = options.pass1;
        this.pass2 = options.pass2;
        this.phone = options.phone;
        this.emailMsg = options.emailMsg;
        this.pwdMsg = options.pwdMsg;
        this.pwd1Msg = options.pwd1Msg;
        this.arr = JSON.parse(getCookie("information"))? JSON.parse(getCookie("information")):[]
        this.flag = false;
        this.init();
        this.bindEvent();
    }
    bindEvent(){
        var that = this;
        this.registerBtn.onclick = function(){
            console.log(that.flag);
            if(that.flag){
                that.obj = {
                    email:that.email.value,
                    pass:that.pass1.value,
                    phone:that.phone.value
                }
                console.log(that.arr);
                that.arr.push(that.obj);
                console.log(that.arr);
                that.arr1 = JSON.stringify(that.arr);
                setCookie("information",that.arr1,{
                    expires:100,
                    path:"/"
                })
                that.email.value = "";
                that.pass1.value = "";
                that.pass2.value = "";
                that.phone.value = "";
            }else{
                alert("失败")
            }
        }
    }
    // 判断方法输入信息是否符合
    init(){
        this.judgeEavil();
        this.judgePass();
        this.judgePassIf();
        this.judgePhone();
    }
    // 1,判断emile
    judgeEavil(){
        var reg =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
       var that = this;
       this.email.onblur = function(){
            if(reg.test(this.value)){
                that.emailMsg.innerHTML = "请继续";
                that.flag = true;
            }else if(this.value == ""){
                that.emailMsg.innerHTML = "Email地址不能为空！";
            }else{
                that.emailMsg.innerHTML = "Email不正确，请换另外一个！";
            }
        }
    }
    // 2,判断密码
    judgePass(){
        var reg =  /\w{6,12}/;
       var that = this;
       this.pass1.onblur = function(){
            if(reg.test(this.value)){
                that.pwdMsg.innerHTML = "密码格式正确，请继续！";
                that.flag = true;
            }else if(this.value == ""){
                that.pwdMsg.innerHTML = "密码不能为空！";
                that.flag = false;
            }else{
                that.pwdMsg.innerHTML = "密码不正确，请换另外一个！";
                that.flag = false;
            }
        }
    }
    //3 确认密码
    judgePassIf(){
        var that = this;
        this.pass2.onblur = function(){
            if(this.value === that.pass1.value){
                that.pwd1Msg.innerHTML = "两次输入的密码相同，请继续！";
                that.flag = true;
            }else{
                that.flag = false;
            }
        }
    }

    // 2,判断手机号
    judgePhone(){
        var reg =  /[0-9]{11}/;
       var that = this;
       this.phone.onblur = function(){
            if(reg.test(this.value)){
                that.flag = true;
            }else{
                that.flag = false;
            }
        }
    }
}
new Logon({
    // 注册信息
    registerBtn:document.getElementById("registerBtn"),
    email:document.getElementById("Email"),
    pass1:document.getElementById("redisterPass"),
    pass2:document.getElementById("password2"),
    phone:document.getElementById("mobilePhone"),
    emailMsg:document.querySelector("#emailMsg"),
    pwdMsg:document.querySelector("#pwdMsg"),
    pwd1Msg:document.querySelector("#pwd1Msg"),
})