define(function(){
    return pcs
});
var pcs = {
    Render:function () {

    },
    pcsRcSetting:function () {
        var winContent = $('#cus-win-content').detach();
        App.dialog({
            title: "遥控及设定",
            width: 650,
            height: 390,
            content: winContent,
            buttons: [{text:'开机',type:'cus-img-btn'},{text:'关机',type:'cus-img-btn'},{text:'急停',type:'cus-img-btn'}]
        });
        /*if($('.cus-mask').length){
            $('.cus-mask').show();
        }else {
            $('body').append('<div class="cus-mask"></div>');
        }*/
    }


}