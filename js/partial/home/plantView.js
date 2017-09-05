define(function(){
    return plantView
});
var plantView = {
    Render:function () {
        $('#plantCarousel').carousel()
        this.getApi()
    },
    getApi:function () {
        $.ajax({
            url:'/interface/getPlantInfo',
            type:'post',
            dataType:'JSON',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){

                    //基础数据
                    var plantViewData = result.data;
                    $.each(plantViewData,function(item,index){
                        if($('#pv_'+item).length){
                            $('#pv_'+item).text(plantViewData[item]);
                        }
                    });
                    //图片
                    var imgUrl = plantViewData.plantPhoto;
                    if(!imgUrl)return;
                    for(var i = 0 ; i<3 ; i++){
                        if($('#pv_img'+i).length){
                            !!imgUrl[i]  ? $('#pv_img'+i).attr('src',imgUrl[i]).one('error',function () {
                                console.log(111);
                                $(this).attr('src','/images/plantstatus/plant.png') }) : $('#pv_img'+i).attr('src','/images/plantstatus/plant.png')
                        }
                    }

                }else {
                    App.alert(result.msg);
                }

            },
            error:function (e) {
                console.log(e)
            }
        })
    }
}