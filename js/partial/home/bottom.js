define(function(){
    return bottom
});
var bottom = {
    Render:function () {

        console.log($('.content-2.cus-item').height());
        $('.cus-bottom li > div').css('margin-top',($('.content-2.cus-item').height()-54)/2 + 'px')
        $(window).resize(function() {
            $('.cus-bottom li > div').css('margin-top',($('.content-2.cus-item').height()-54)/2 + 'px')
        });
    }
}