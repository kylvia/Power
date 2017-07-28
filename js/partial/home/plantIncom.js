define(function(){
    return plantIncom
});
var plantIncom = {
    Render:function () {
        this.getData();
    },
    getData:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getPlantRevenue',
            method:'post',
            type:'json',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){
                    var getPR = result.data;
                    $('#daily_revenue_unit').text(getPR.daily_revenue_unit);
                    $('#total_revenue_unit').text(getPR.total_revenue_unit);

                    //当日收益
                    var drArr = getPR.daily_revenue.toString().split('');
                    var fdrArr = _this.formatterNumber(7,drArr);
                    $('#daily_revenue span').each(function (index,item){
                        $(item).text(fdrArr.shift());
                    })
                    //累计收益
                    var trArr = getPR.total_revenue.toString().split('');
                    var ftrArr = _this.formatterNumber(7,trArr);
                    $('#total_revenue span').each(function (index,item){
                        $(item).text(ftrArr.shift());
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
    formatterNumber:function(len,arr){
        if(arr.length<len){
            arr.unshift('0');
            this.formatterNumber(len,arr);
        }
        return arr;
    }
}