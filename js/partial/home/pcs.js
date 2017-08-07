define(function(){
    return pcs
});
var pcs = {
    cusWinContent:'',
    cusWinRightContent:'',
    Render:function () {
        var _this = this;
        this.resize();
        _this.getListTable();
        setInterval(_this.getListTable,5000);
    },
    resize:function () {
        $('.cwc-col-arp').width('auto');
        if($('.cwc-col-ap').width() !== 0){
            $('.cwc-col-arp').width($('.cwc-col-ap').width() > $('.cwc-col-rp').width() ? $('.cwc-col-ap').width() + 10: $('.cwc-col-rp').width() + 10)
        }

    },
    //PCS列表页
    getListTable:function(){
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
    rightValidFunc:function (dom,getRightWin) {
        var _this = this;
        if(!$.trim($('#rightUser').val())){
            App.alert('请输入账户名');
            return;
        }
        if(!$.trim($('#rightPwd').val())){
            App.alert('请输入密码');
            return;
        }
        $.ajax({
            url:'/interface/validateRight',
            type:'post',
            dataType:'JSON',
            data:$("#validateUserForm").serializeArray(),
            success:function (result) {
                if(result.success){
                    $(".modal").modal("hide");
                    _this.pcsRcSetting(dom);
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
        })

        $('#pcs-timetable').bootstrapTable({
            method:'POST',
            dataType:'json',
            cache: false,
            editable:true,//开启编辑模式
            clickToSelect: true,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'interface/setChargeTime',
            striped:true,
            // height: $(window).height() - 200,
            width:$(window).width(),
            pagination:true,
            minimumCountColumns:2,
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            columns: [
                {
                    field:"id",
                    title:"时间段名称",
                    align:"center",
                    edit:false,
                    formatter:function(value, row, index){
                        return "时间段"+index ; //返回行号
                    }
                },
                {
                    field : 'alarmName',
                    title : '告警名称',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'devName',
                    title : '设备名称',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'devType',
                    title : '设备类型',
                    align : 'center',
                    valign : 'middle'
                }]
        });

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
        //P/Q模式
        if(val === '2'){
            $('.cus-win-mark').height(0);
            var data = {
                "token": Cookies.getCook('token'),
                "device_id": $('.getDeviceUnId').val()
            }
            this.pcsAjax('interface/getSingleDevicePower',JSON.stringify(data),setAvpFunc);
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
            "token": Cookies.getCook('token'),
            "device_id": $('.getDeviceUnId').val(),
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