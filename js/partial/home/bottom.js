define(function(){
    return bottom
});
var bottom = {
    Render:function () {
        $('.cus-bottom li > div').css('margin-top',($('.content-2.cus-item').height()-54)/2 + 'px')
        $(window).resize(function() {
            $('.cus-bottom li > div').css('margin-top',($('.content-2.cus-item').height()-54)/2 + 'px')
        });
        setTimeout(this.getData(),1800000);
    },
    getData:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getBatteryStatistics',
            type:'post',
            dataType:'JSON',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){
                    var getBS = result.data;
                    $.each(getBS,function (item,value) {
                        $('#bs_'+item+"_value").text(value.value);
                        $('#bs_'+item+"_unit").text(value.unit);

                    })
                }else {
                    App.alert(result.msg);
                }
            },
            error:function (e) {
                console.log(e)
            }
        })
    },
}