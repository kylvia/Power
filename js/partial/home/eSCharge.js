define(function(){
    return eSCharge
});
var eSCharge = {
    interval:'',
    Render:function () {
        var _this = this;
        _this.setList();
        if(_this.interval) clearInterval(_this.interval);
        _this.interval = setInterval(_this.setList,5000);
    },

    setList:function () {
        var _this = this;
        if(main.clearInterCharge(_this.interval,'cus-esc-container'))return;
        function setStatueFunc(obj) {
            if(obj.name === obj.setName){
                $('#bms0'+obj.index+' '+obj.className).removeClass('on');
                if(Number(obj.value)){
                    $('#bms0'+obj.index+' '+obj.className).addClass('on');
                }
            }
        }
        $.ajax({
            url:'/interface/getCurrentBMS',
            type:'post',
            dataType:'JSON',
            success:function (result) {
                if(result.success){
                    $('.cus-esc-container-loading').hide();
                    $('.cus-esc-container').show();
                    var listData = result.data;
                    $.each(listData,function (index,item) {
                        index +=1;
                        $.each(item,function (name,value) {
                            var $dom = $('#bms'+index+'_'+name);
                            //SOC
                            if(name === 'soc'){
                                $('#bms'+index+'_soc_per').css('height',value);
                                $('#bms'+index+'_val_soc').text(value);
                            }
                            $dom.length && $dom.text(value);
                            //停机/开机/故障
                            if(name === 'bms_mode'){
                                $('#bms0'+index+' .psis-cdb').removeClass('on');
                                var statusArr = ['.psis-charge','.psis-discharge','.psis-break','.psis-standby'];
                                debugger;
                                switch (Number(value)){
                                    case 50:$('#bms0'+index+' '+statusArr[2]).addClass('on');break;
                                    case 23:$('#bms0'+index+' '+statusArr[0]).addClass('on');break;
                                    case 13:$('#bms0'+index+' '+statusArr[1]).addClass('on');break;
                                    case 3:$('#bms0'+index+' '+statusArr[3]).addClass('on');break;
                                }
                            }
                            //生命信号
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.psis-signal',
                                setName:'bms_lifesignal'
                            })
                            //通讯
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.psis-comm',
                                setName:'connected'
                            })
                            //接触器
                            setStatueFunc({
                                name:name,
                                value:value,
                                index:index,
                                className:'.psis-contactor',
                                setName:'bms_relaystatus'
                            })
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
    }
}