define(function(){
    return plantRunning
});
var plantRunning = {
    Render:function () {
        $('.slider-item').on('click',function () {
            $('.slider-item').removeClass('slider-on');
            $(this).addClass('slider-on');
        })
    }
}