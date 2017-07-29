define(function(){
    return energeFlow
});
var energeFlow = {
    Render:function () {

        $('.cus-toPage').on('click',function () {
            $('#mainContainer').loadPage($(this).attr('attr-href'));
        })

        setTimeout(this.getData(),5000)
    },

    getData:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getCurrentPower',
            method:'post',
            type:'json',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){
                    $('#egtUa').text(result.data.bus_voltage_a);
                    $('#egtUb').text(result.data.bus_voltage_b);
                    $('#egtUc').text(result.data.bus_voltage_c);
                    $('#egtF').text(result.data.bus_frequency);
                    //母线箭头流向
                    var bpower = result.data.bus_power;
                    var bpArrow;
                    bpower.substring(0,1) === '+' ? bpArrow = 'arrow-l' : bpArrow = 'arrow-r';
                    var classNameBp = $('.cus-ef-arrow6').attr('class').split(' ');
                    if(classNameBp.length >2){
                        classNameBp.pop();
                        $('.cus-ef-arrow6').removeClass().addClass(classNameBp.join(' '));
                        $('.cus-ef-arrow6').addClass(bpArrow);
                    }else {
                        $('.cus-ef-arrow6').addClass(bpArrow);
                    }
                    $('#egtP').text(bpower.substring(1) );

                    var deviceData = result.data.device_status;
                    for(var i = 0,len = deviceData.length;i<len;i++){
                        var item = deviceData[i];
                        //    功率
                        $('#pTobPower'+(i+1)).text(item.power.substring(1));
                        //设备状态
                        switch (item.inverter_status){
                            case '开机':deviceStatus = 'pscStatus-kj';break;
                            case '关机':deviceStatus = 'pscStatus-gj';break;
                            case '故障':deviceStatus = 'pscStatus-gz';break;
                        }
                        $('#pscStatus'+(i+1)).removeClass().addClass('pscStatus '+deviceStatus);
                        var bsImg ;
                        var classNameAr = $('.cus-ef-arrow'+i).attr('class').split(' ');
                        //断路器断连
                        if(!Number(item.breaker_status)){

                            //电池icon
                            var batteryIcon = ['batteryZero','batteryOne','batteryTwo','batteryThr','batteryFour'];
                            var batterySrc = '/images/plantstatus/'+batteryIcon[Number(item.batteryCell)]+'.png';
                            $('#battery'+(i+1)).attr('src',batterySrc);
                            //流向停止
                            if(classNameAr.length >2){
                                classNameAr.pop();
                                $('.cus-ef-arrow'+i).removeClass().addClass(classNameAr.join(' '));
                            }
                            // Number(item.breaker_status) ? bsImg = 'breakerClosure' : bsImg = 'breakerDisc';

                            $('#breaker'+(i+1)).attr('src','/images/plantstatus/breakerClosure.png');
                            continue;
                        }

                        $('#breaker'+(i+1)).attr('src','/images/plantstatus/breakerDisc.png');
                    //    电池
                        var csAr = item.charge_status;
                        var batteryGifIcon;
                        csAr === '+' ? batteryGifIcon = 'charge.gif' : batteryGifIcon = 'discharge.gif';
                        var batterySrc = '/images/plantstatus/'+batteryGifIcon;
                        $('#battery'+(i+1)).attr('src',batterySrc);
                    //    电流方向
                        var fArrow;
                        var powerAr = item.power;
                        powerAr.substring(0,1) === '+' ? fArrow = 'arrow-r' : fArrow = 'arrow-l';
                        var classNameAr = $('.cus-ef-arrow'+i).attr('class').split(' ');
                        if(classNameAr.length >2){
                            classNameAr.pop();
                            $('.cus-ef-arrow'+i).removeClass().addClass(classNameAr.join(' '));
                            $('.cus-ef-arrow'+i).addClass(fArrow);
                        }else {
                            $('.cus-ef-arrow'+i).addClass(fArrow);
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
    },
    setArrow:function (deviceObj) {
        if(!deviceObj) return;
        $.each(deviceObj,function (name,arr) {
            $.each(arr,function (item,index) {
                $('#'+name+index).removeClass('');
                var className = $('#'+name+index).attr('class').split('');
                if(className.length>2){

                }
            })
        })
    }
}