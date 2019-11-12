// 用户登录
// $(function(){
//     this.loginId= $("#loginId");
//         this.pwd = $("#password");
//     $("input[type=submit]").on("click",function(){
        
//         var that = this;
//         this.loginId.on("blur", function(){
//             if($(this).val() == null || $(this).val() == "" || $(this).val() == "用户名或Email帐号"){
//                 alert("请输入用户名,然后再登陆");
//                 $(this).focus();
//                 return false;
//               }
//         })
//         this.pwd
//     if(pwd.val() == null||pwd.val() == ""){
//     alert("请输入密码,然后再登陆");
//     pwd.focus();
//     return false;
//     }
//     return true;
//     })
// })

class LoginSubmit{
    constructor(){
        this.loginId= $("#loginId");
        this.pwd = $("#password");
        this.flag = false;
        this.init();
        this.addEvent();
    }
    init(){
        this.account();
        this.pass();
    }
    addEvent(){
        var that = this;
        $("input[type=button]").on("click",function(){
            if(that.flag){
                // alert("成功");
                that.information = JSON.parse(getCookie("information")) ? JSON.parse(getCookie("information")) : [];
                for(let i = 0; i < that.information.length; i++){
                    if(that.loginId.val() == that.information[i].phone && that.pwd.val() == that.information[i].pass){
                        alert("登录成功");
                        that.loginId.val("");
                        that.pwd.val("");
                        return
                    }
                }
                alert("该用户不存在，请注册");
            }else{
                alert("失败");
                return
            }
        })
    }
    account(){
        var that = this;
        this.loginId.on("focus", function(){

        })
        this.loginId.on("blur", function(){
            if($(this).val() == null || $(this).val() == "" || $(this).val() == "用户名或Email帐号"){
                alert("请输入用户名,然后再登陆");
                $(this).focus();
                that.flag = false;
            }
            that.flag = true;
        })
    
    }
    pass(){
        var that = this;
        this.pwd.on("focus", function(){
            
        })
        this.pwd.on("blur", function(){
            if($(this).val() == null||$(this).val() == ""){
                alert("请输入密码,然后再登陆");
                $(this).focus();
                that.flag = false;
            }
                that.flag = true;
        })
    }
}
new LoginSubmit();


