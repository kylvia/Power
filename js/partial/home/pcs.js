define(function(){
    return pcs
});
var pcs = {
    interval:'',
    cusWinContent:'',
    cusWinRightContent:'',
    Render:function () {
        var _this = this;
        this.resize();
        _this.getListTable();
        if(_this.interval) clearInterval(_this.interval);
        _this.interval = setInterval(_this.getListTable,5000);
    },
    resize:function () {
        $('.cwc-col-arp').width('auto');
        if($('.cwc-col-ap').width() !== 0){
            $('.cwc-col-arp').width($('.cwc-col-ap').width() > $('.cwc-col-rp').width() ? $('.cwc-col-ap').width() + 10: $('.cwc-col-rp').width() + 10)
        }

    },
    //PCS列表页
    getListTable:function(){
        var _this = this;
        if(main.clearInterCharge(_this.interval,'cus-pcs-container'))return;
        function setStatueFunc(obj) {
            if(obj.name === obj.setName){
                $('#pcs0'+obj.index+' '+obj.className).removeClass('on');
                if(Number(obj.value)){
                    $('#pcs0'+obj.index+' '+obj.className).addClass('on');
                }
            }
        }
        $.ajax({
            url:'/interface/getCurrentPCS',
            type:'post',
            dataType:'JSON',
            success:function (result) {
                if(result.success){
                    $('.cus-pcs-container-loading').hide();
                    $('.cus-pcs-container').show();
                    var listData = result.data;
                    $.each(listData,function (index,item) {
                        index +=1;
                        $.each(item,function (name,value) {
                            var $dom = $('#pcs'+index+'_'+name);
                            if($dom){
                                $dom.text(value);
                            }
                            //停机/开机/故障
                            if(name === 'sysstate1_0'){
                                var statusArr = ['.psis-stop','.psis-start','.psis-break'];
                                $('#pcs0'+index+' .psis-ssb').removeClass('on');
                                if(index ===1)
                                console.log(statusArr[Number(value)]);
                                $('#pcs0'+index+' '+statusArr[Number(value)]).addClass('on');
                            }
                            //充放电状态
                            if(name === 'sysstate1_6'){
                                var statusArr = ['.pcs-charge','.pcs-discharge'];
                                $('#pcs0'+index+' .pcs-concharge').removeClass('on');
                                $('#pcs0'+index+' '+statusArr[Number(value)]).addClass('on');
                            }
                            //通讯
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.psis-connect',
                                setName:'connected'
                            })
                            //防雷器状态
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.pcs-las',
                                setName:'sysstate1_11'
                            })
                            //钥匙开关
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.pcs-keySwitch',
                                setName:'sysstate1_10'
                            })
                            //急停开关
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.pcs-ess',
                                setName:'sysstate1_9'
                            })
                            //接触器状态
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.pcs-cs',
                                setName:'sysstate1_8'
                            })
                            //交流断路器
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.pcs-acbr',
                                setName:'sysstate1_7'
                            })
                            //通讯
                            if(name === 'connected'){
                                $('#pcs0'+index+' .psis-connect').removeClass('on');
                                if(Number(value)){
                                    $('#pcs0'+index+' .psis-connect').addClass('on');
                                }
                            }
                            //设备id
                            if(name === 'device_id'){
                                $('#pcs0'+index+' .deviceUnId').val(value);
                            }
                        });
                    });
                }else {
                    App.alert(result.message);
                }
            },
            error:function (e) {
                console.log(e)
            }
        });
    },
    pcsRcSetting:function (deviceId) {
        var _this = this;
        !_this.cusWinContent?_this.cusWinContent = $('#cus-win-content').detach():_this.cusWinContent;
        var winContent = _this.cusWinContent;
            App.dialog({
            title: "遥控及设定",
            width: 650,
            height: 520,
            // backdrop: 'static',
            content: winContent,
            openEvent:_this.dialogFunc(deviceId),
            buttons: [{text:'开机',id:'startupExcute',type:'cus-img-btn cus-ib-start clickOpr'},
                {text:'关机',id:'shutdownExcute',type:'cus-img-btn cus-ib-shutdown clickOpr'},
                {text:'急停',id:'immExcute',type:'cus-img-btn cus-ib-imstop clickOpr'}]
        });
        $('.cus-win-mark').height('100%');
        $('.cwc-val').val(0);

        $('#cus-win-content').show();
        $('.getDeviceUnId').val(deviceId);

        $('#pcs-runningModel option').on('click',function () {
            pcs.rnExcute()
        });

        $('.clickOpr').on('click',function () {
            var val = $(this).text();
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('.getDeviceUnId').val(),
                "action": ['开机','关机','急停'].indexOf(val)
            }
            _this.pcsAjax('/interface/startOrTurnOff',JSON.stringify(data));
        })

    },
    //权限校验
    getRight:function (dom) {
        var _this = this;
        var deviceId = $(dom).parents('.pcs-setting').find('.deviceUnId').val();
        !_this.cusWinRightContent?_this.cusWinRightContent = $('#rightControl').detach():_this.cusWinRightContent;
        var cusWinRightContent = _this.cusWinRightContent;
        var getRightWin = App.dialog({
            title: "控制权限校验",
            width: 400,
            height: 110,
            content: cusWinRightContent,
            buttons: [{text:'确认',id:'rightAccess',type:'cus-img-btn cus-ib-start'},
                {text:'取消',type:'cus-img-btn cus-ib-shutdown',clickToClose :true}]
        });

        $('#rightUser').val('');
        $('#rightPwd').val('');
        $('#rightAccess').on('click',function () {
            _this.rightValidFunc(deviceId,getRightWin)
        })

    },
    rightValidFunc:function (deviceId,getRightWin) {
        var _this = this;
        $('.getDeviceUnId').val(deviceId);
        if(!$.trim($('#rightUser').val())){
            App.alert('请输入账户名');
            return;
        }
        if(!$.trim($('#rightPwd').val())){
            App.alert('请输入密码');
            return;
        }
        $.ajax({
            url:'/interface/checkUserRights',
            type:'post',
            dataType:'JSON',
            data:$("#validateUserForm").serializeArray(),
            success:function (result) {
                if(result.success){
                    $(".modal").modal("hide");
                    _this.pcsRcSetting(deviceId);
                }else {
                    App.alert(result.msg);
                }
            },
            error:function (e) {
                console.log(e)
            }
        })
    },
    //下拉设置
    dialogFunc:function (deviceId) {
        require(['./main/enumeration'],function (Enumeration) {
            var dceTmp = Enumeration.DCEnergy;
            var rmTmp = Enumeration.RunningModel;
            var enTmp = Enumeration.tXFTGEn;
            var sppendDce = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',dceTmp);
            $('#pcs-dCEnergy').html(sppendDce);
            var runningModel = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',rmTmp);
            $('#pcs-runningModel').html(runningModel);
            var enModel = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',enTmp);
            $('#pcs-enable').html(enModel);


            $.ajax({
                url:'/interface/getCurrentSet',
                type:'post',
                dataType:'JSON',
                success:function (result) {
                    if(result.success){
                        var data = result.data;
                        $('#pcs-dCEnergy').length && $('#pcs-dCEnergy').val(data.controlAuthority);
                        //EMS控制
                        if(Number(data.controlAuthority) === 0){
                            $('.cus-win-mark').height(0);
                            /*var data = {
                                "token": Cookies.getCook('token'),
                                "device_id": $('.getDeviceUnId').val()
                            }
                            this.pcsAjax('interface/getSingleDevicePower',JSON.stringify(data),setAvpFunc);*/
                        }

                        $('#pcs-runningModel').length && $('#pcs-runningModel').val(data.runningMode);
                        $('#pcs-enable').length && $('#pcs-enable').val(data.xftg_en);

                        var tableVals = data.periods;
                        var $findTr = $('#pcs-timetable tbody tr');
                        $.each(tableVals,function (index,item) {
                            for(var i in item){
                                $($findTr[index]).find("[name=" + i + "]").length && $($findTr[index]).find("[name=" + i + "]").val(item[i]);
                            }
                        })
                    }else {
                        App.alert(result.message);
                    }
                },
                error:function (e) {
                    console.log(e)
                }
            });
        })


    },
    //运行模式设置
    rnExcute:function () {
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('.getDeviceUnId').val(),
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

            _this.resize();
        }
        //EMS控制
        if(Number(val) === 0){
            $('.cus-win-mark').height(0);
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('.getDeviceUnId').val()
            }
            // this.pcsAjax('interface/getSingleDevicePower',JSON.stringify(data),setAvpFunc);
        }

    },
    //直流能量调控器控制权限
    dceExcute:function () {
        var data = {
            "token": Cookies.getCook('token'),
            "device_id": $('.getDeviceUnId').val(),
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
            "device_id": $('.getDeviceUnId').val(),
            "activepower": $('#pcs-apVal').val()
        }
        this.pcsAjax('/interface/setActivePower',JSON.stringify(data));
    },
    //设置无功
    rpExcute:function () {
        var data = {
            "device_id": $('.getDeviceUnId').val(),
            "reactivepower": $('#pcs-rpVal').val()
        }
        this.pcsAjax('/interface/setReactivePower',JSON.stringify(data));
    },
    //设置使能
    enableExcute:function () {
        var data = {
            "device_id": $('.getDeviceUnId').val(),
            "reactivepower": $('#pcs-enable').val()
        }
        this.pcsAjax('/interface/setXFTG_en',JSON.stringify(data));
    },
    //时间段设置
    timeLineExcute:function () {

        var reg = /^[+-]\d/;
        if(!reg.test($('.cus-table-input').val())){
            App.alert({msg:"【充放电电流】栏应输入+数字或-数字"});
            $('.cus-table-input').val('');
            return;
        }

        var formData = $('#setTimeLine').serializeArray();
        var operation=[];
        var obj={};

        /*var $tableTr = $('#pcs-timetable tbody tr');
        for(var i=0,len = $tableTr.length;i<len;i++){
            var obj={};
            var inp = $tableTr.find('input')
        }*/
        for(var i=0,len = formData.length;i<len;i++){

            var formItem = formData[i];
            var objname = formItem.name;
            var objval = formItem.value;
            obj[objname] = objval;
            if(i>0 && i % 3 === 2){
                operation.push(obj);
                obj = {};
            }
        }
        var data = {
            "setRange": $('#aiAl').val() ? 1 : 0 ,
            "device_id": $('.getDeviceUnId').val(),
            periods:operation
        }
        console.log(data);
        // console.log('[setTimeLine]',$('#setTimeLine').serializeArray());
        this.pcsAjax('/interface/setChargeTime',data);
    },
    bottomoprExcute:function (params) {
        if(!params)return;

        $.each(params,function (item,index) {
            $('#'+item.id).on('click',function () {
                var data = {
                    "token": Cookies.getCook('token'),
                    "device_id": $('.getDeviceUnId').val(),
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
                        var msg = '【'+result.data.device_name+'】于【'+result.data.time+'】，'+result.data.msg;
                        App.alert(msg);
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