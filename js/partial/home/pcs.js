define(function(){
    return pcs
});
var pcs = {
    cusWinContent:'',
    Render:function () {
        this.resize();
    },
    resize:function () {
        $('.cwc-col-arp').width('auto');
        $('.cwc-col-arp').width($('.cwc-col-ap').width() > $('.cwc-col-rp').width() ? $('.cwc-col-ap').width() + 10: $('.cwc-col-rp').width() + 10)

    },
    pcsRcSetting:function (dom) {
        var deviceId = $(dom).parents('.pcs-setting').find('.deviceUnId').val();
        var _this = this;
        !_this.cusWinContent?_this.cusWinContent = $('#cus-win-content').detach():_this.cusWinContent;
        var winContent = _this.cusWinContent;
            App.dialog({
            title: "遥控及设定",
            width: 650,
            height: 'auto',
            // backdrop: 'static',
            content: winContent,
            openEvent:_this.dialogFunc(deviceId),
            buttons: [{text:'开机',id:'startupExcute',type:'cus-img-btn cus-ib-start clickOpr'},
                {text:'关机',id:'shutdownExcute',type:'cus-img-btn cus-ib-shutdown clickOpr'},
                {text:'急停',id:'immExcute',type:'cus-img-btn cus-ib-imstop clickOpr'}]
        });
        $('#cus-win-content').show();
        $('#deviceUnId').val(deviceId);

        $('#pcs-runningModel option').on('click',function () {
            pcs.rnExcute()
        });

        $('.clickOpr').on('click',function () {
            var val = $(this).text();
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('#deviceUnId').val(),
                "action": ['开机','关机','急停'].indexOf(val)
            }
            _this.pcsAjax('/interface/startOrTurnOff',JSON.stringify(data));
        })

    },
    dialogFunc:function (deviceId) {
        require(['./main/enumeration'],function (Enumeration) {
            var dceTmp = Enumeration.DCEnergy;
            var rmTmp = Enumeration.RunningModel;
            var sppendDce = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',dceTmp);
            $('#pcs-dCEnergy').html(sppendDce);
            var runningModel = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',rmTmp);
            $('#pcs-runningModel').html(runningModel);
        })
    },
    //运行模式设置
    rnExcute:function () {
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('#deviceUnId').val(),
                "action": $('#pcs-runningModel').val()
            }
            this.pcsAjax('interface/setControlAuthority',JSON.stringify(data));

    },

    //运行模式设置
    setAvpExcute:function (val) {

        var _this = this;
        $('.cus-win-mark').height('100%');
        $('.pcs-input-clear').val('');
        function setAvpFunc(data) {
            $('#curAp').text(data.activepower);
            $('#curRp').text(data.reactivepower);
            $('.curAvpUnit').text(data.unit);
            debugger
            _this.resize();
        }
        //P/Q模式
        if(val === '6'){
            $('.cus-win-mark').height(0);
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('#deviceUnId').val()
            }
            this.pcsAjax('interface/getSingleDevicePower',JSON.stringify(data),setAvpFunc);
        }

    },
    //直流能量调控器控制权限
    dceExcute:function () {
        var data = {
            "token": Cookies.getCook('token'),
            "device_id": $('#deviceUnId').val(),
            "action": $('#pcs-dCEnergy').val()
        }
        this.pcsAjax('/interface/setControlAuthority',JSON.stringify(data));
    },
    //设置有功
    apExcute:function () {
        var reg = /\d/;
        if(!reg.test($('#pcs-apVal').val())){
            App.alert({msg:"请输入数字"});
            $('#pcs-apVal').val('');
            return;
        }
        var data = {
            "token": Cookies.getCook('token'),
            "device_id": $('#deviceUnId').val(),
            "activepower": $('#pcs-apVal').val()
        }
        this.pcsAjax('/interface/setActivePower',JSON.stringify(data));
    },
    //设置无功
    rpExcute:function () {
        var data = {
            "token": Cookies.getCook('token'),
            "device_id": $('#deviceUnId').val(),
            "reactivepower": $('#pcs-rpVal').val()
        }
        this.pcsAjax('/interface/setReactivePower',JSON.stringify(data));
    },
    bottomoprExcute:function (params) {
        if(!params)return;

        $.each(params,function (item,index) {
            $('#'+item.id).on('click',function () {
                var data = {
                    "token": Cookies.getCook('token'),
                    "device_id": $('#deviceUnId').val(),
                    "action": item.action
                }
                this.pcsAjax('interface/startOrTurnOff',JSON.stringify(data));
            })
        })


    },
    shutdownExcute:function () {
        this.pcsAjax();
    },

    pcsAjax:function (url,param,callback) {
        $.ajax({
            url:url,
            type:'post',
            dataType:'JSON',
            data:param,
            success:function (result) {
                if(result.success){

                    if(callback){
                        // callback.call();
                        callback(result.data);
                    }else {
                        App.alert(result.data);
                    }
                }else {
                    App.alert(result.message);
                }
            },
            error:function (e) {
                console.log(e)
            }
        });
    }

}