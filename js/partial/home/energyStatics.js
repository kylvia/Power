define(function(){
    return energyStatics
});
var energyStatics = {
    Render:function () {
        var _this = this;
        this.getgetChargeTimesData();
        this.getDailyPowerStatisticsData();
        setTimeout(function(){
            _this.getgetChargeTimesData();
            _this.getDailyPowerStatisticsData();
        },5000);
    },
    //充放电次数
    getgetChargeTimesData:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getChargeTimes',
            type:'post',
            dataType:'JSON',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){
                    $('#dailyChargeTimes').text(result.data.dailyChargeTimes);
                    $('#totalChargeTimes').text(result.data.totalChargeTimes);
                }else {
                    App.alert(result.msg);
                }
            },
            error:function (e) {
                console.log(e)
            }
        })
    },
    //echarts数据
    getDailyPowerStatisticsData:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getDailyPowerStatistics',
            type:'post',
            dataType:'JSON',
            data:JSON.stringify({token:Cookies.getCook('token')}),
            success:function (result) {
                if(result.success){
                    _this.esKpi(result.data);
                }else {
                    App.alert(result.msg);
                }
            },
            error:function (e) {
                console.log(e)
            }
        })
    },
    esKpi:function (datas) {
        var getId = document.getElementById('esCcurPower');
        if(!getId)return;
        var esKpiChart = Echarts.init(getId);

        var xData = datas.xData;
        var yData = datas.yData;
        var cutColor = ['#009A66','#006599','#009899','#0066CB','#343399'];
        var option = {
            tooltip:{
                trigger:'axis'
            },
            dataZoom: [{
                dataZoomIndex: 1,
                type: 'inside',
                startValue: 10,
                endValue: 80
            }, {
                show: true,
                dataZoomIndex: 1,
                type: 'slider',
                y: '90%',
                startValue: 10,
                endValue: 80
            }],
            xAxis: {
                name:'h',
                type: 'category',
                splitLine:{
                    show:false
                },
                axisLabel:{
                    interval: 0,
                    textStyle:{
                        color:'#a5e2f9'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#272761'
                    }
                },
                nameTextStyle:{
                    color:'#a5e2f9'
                },
                data: xData
            },
            grid: {
                top:'25%',
                bottom:'10%'
            },
            yAxis: [{
                name:datas.unit,
                type: 'value',
                splitLine:{
                    show:false
                },
                axisLabel:{
                    textStyle:{
                        color:'#a5e2f9'
                    }
                },
                axisLine:{
                    lineStyle:{
                        color:'#272761'
                    }
                },
                nameTextStyle:{
                    color:'#a5e2f9'
                }
            }],
            dataZoom: [{
                type: 'inside',
                start: 10,
                end: 90
            }],
            series: [
                {
                    type:'bar',
                    barWidth: '40%',
                    barBorderRadius: 4,
                    itemStyle: {
                        normal: {

                            barBorderRadius: 4,
                            // callback,设定每一bar颜色,配置项color顶axis一组bars颜色
                            color: function(params) {
                                var num=cutColor.length;
                                return cutColor[params.dataIndex%num]
                            }
                        }
                    },
                    data: yData
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        esKpiChart.setOption(option);
    }
}