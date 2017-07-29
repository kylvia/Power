define(function(){
    return homeIndex;
});
var homeIndex = {
    Render:function () {

        $('#exitSys').on('click',function () {
            Cookies.clearOne();
            $('#sysBody').loadPage('partial/login.html');
        })
        
        $('#topNav li').on('click',function () {
            $('#topNav li').removeClass('active');
            $(this).addClass('active');
            var toPage = $(this).find('a').attr('attr-href');
            $('#mainContainer').loadPage(toPage);
        });
        $('#topNav li').eq(0).click();
    }
}