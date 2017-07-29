define(function(){
    return login;
});
var login = {
    Render:function () {
        $('#loginBtn').on('click',function () {
            var user = {
                userName:'aa',
                loginName:'admin',
                userid:'4324324',
                userType:'1'
            }
            Menu.login('12344',user);
            $('#sysBody').loadPage('partial/index.html');
        });
    }
}