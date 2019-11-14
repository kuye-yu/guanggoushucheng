//  头部 收购商城 登录 注册 企业官网 订单...悬浮变色效果
define(function(){
    'use strict';
    function Discoloration(a){
        a.hover(function(){
            $(this).addClass("selected");
        },function(){
            $(this).removeClass("selected");
        });
    }
    return Discoloration
});