define(function(){
    return energeFlow
});
var energeFlow = {
    Render:function () {

        $('.toPcsPage').on('click',function () {
            console.log('roPage');
            $('#mainContainer').loadPage($(this).attr('attr-href'));
        })
    },
}