define(function(){
    return bottom
});
var bottom = {
    interval:'',
    Render:function () {
        var _this = this;
        $('.cus-bottom li > div').css('margin-top',($('.content-2.cus-item').height()-54)/2 + 'px')
        $(window).resize(function() {
            $('.cus-bottom li > div').css('margin-top',($('.content-2.cus-item').height()-54)/2 + 'px')
        });
        if(_this.interval) clearInterval(_this.interval);
        _this.interval = setInterval(this.getData(),5000);
    },
    getData:function () {
        var _this = this;
        if(main.clearInterCharge(_this.interval,'ps-interval'))return;
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