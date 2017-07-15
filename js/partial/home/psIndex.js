define(function(){
    return psIndex
});
var psIndex = {
    resize:function(){
        $('#mainContainer').height($('body').height() -$('#mainNavmsg').height()-$('#mainNavbar').height()-5);
    },
    Render:function () {
        var _this = this;
        _this.resize();
        $(window).resize(function() {
            _this.resize();
        });

        var items = $('.aside-main');
        if(items.length){
            var loadPageContainer = items.find('.cus-item');
            loadPageContainer.each(function (index,item) {
                console.log(item);
                var toPage = $(item).attr('attr-href');
                !!toPage && $(item).find('.section').loadPage(toPage);
            })
        }
    }
}