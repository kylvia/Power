define(function(){
    return login;
});
var login = {
    Render:function () {
        $('#loginBtn').on('click',function () {

            $('#sysBody').loadPage('partial/main.html');
            console.log($(".cus-login-box").serializeArray());
            if(!$.trim($('#userName').val())){
                App.alert('请输入用户名');
                return;
            }
            if(!$.trim($('#passWord').val())){
                App.alert('请输入密码');
                return;
            }
            $.ajax({
                url:'/loginAuth',
                type:'post',
                dataType:'JSON',
                data:$(".cus-login-box").serializeArray(),
                success:function (result) {
                    if(result.success){
                        $('#sysBody').loadPage('partial/main.html');
                    }else {
                        App.alert(result.msg);
                    }
                },
                error:function (e) {
                    console.log(e)
                }
            })
            /*var user = {
                userName:'aa',
                loginName:'admin',
                userid:'4324324',
                userType:'1'
            }
            Menu.login('12344',user);*/

        });
    }
}