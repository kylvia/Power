define(function(){
    return pcs
});
var pcs = {
    cusWinContent:'',
    Render:function () {
        $('.cwc-col-arp').width($('.cwc-col-ap').width() > $('.cwc-col-rp').width() ? $('.cwc-col-ap').width() : $('.cwc-col-rp').width())
    },
    pcsRcSetting:function () {
        var _this = this;
        !_this.cusWinContent?_this.cusWinContent = $('#cus-win-content').detach():_this.cusWinContent;
        var winContent = _this.cusWinContent;
            App.dialog({
            title: "遥控及设定",
            width: 650,
            height: 'auto',
            backdrop: 'static',
            content: winContent,
            openEvent:_this.dialogFunc,
            buttons: [{text:'开机',type:'cus-img-btn cus-ib-start'},{text:'关机',type:'cus-img-btn cus-ib-shutdown'},{text:'急停',type:'cus-img-btn cus-ib-imstop'}]
        });
        /*if($('.cus-mask').length){
            $('.cus-mask').show();
        }else {
            $('body').append('<div class="cus-mask"></div>');
        }*/
    },
    dialogFunc:function () {

        require(['./main/enumeration'],function (Enumeration) {
            var dceTmp = Enumeration.DCEnergy;
            var rmTmp = Enumeration.RunningModel;
            var sppendDce = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',dceTmp);
            $('#pcs-dCEnergy').html(sppendDce);
            var runningModel = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',rmTmp);
            $('#pcs-runningModel').html(runningModel);

        })
    },
    rnExcute:function () {
        if($('#pcs-runningModel option:selected') .val() === 'pq'){
            $('.cus-win-mark').height(0);
        }else {
            $('.cus-win-mark').height('100%');
            $('.pcs-input-clear').val('');
        }
    }


}