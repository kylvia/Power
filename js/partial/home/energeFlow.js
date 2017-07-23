define(function(){
    return energeFlow
});
var energeFlow = {
    Render:function () {

        $('.cus-toPage').on('click',function () {
            $('#mainContainer').loadPage($(this).attr('attr-href'));
        })
    },
}