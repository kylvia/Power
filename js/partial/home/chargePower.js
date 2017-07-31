define(function(){
    return energyStatics
});
var energyStatics = {
    Render:function () {

        this.getChargedCurveData();
    },
    //echarts数据
    getChargedCurveData:function () {
        var _this = this;
        $.ajax({
            url:'/interface/getChargedCurve',
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

        var getId = document.getElementById('cPower');
        if(!getId)return;
        var esKpiChart = Echarts.init(getId);

        var xData = datas.time;
        var option = {
            tooltip:{
                trigger:'axis'
            },
            color:['#33CC66','#3366CC','#00CCCC'],
            legend: {
                top: '4%',
                textStyle:{
                    color:'#a5e2f9'
                },
                data:''
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
            series: []
        };


        var legendData = [];
        var powers = datas.power;
        var yDatas = [];
        for(var i = 0 ,len = powers.length;i<len;i++){
            legendData.push(powers[i].name);
            yDatas[i] = powers[i].value;
            option.series.push({
                name:powers[i].name,
                type:'line',
                data: powers[i].value
            });
        }
        option.legend.data = legendData;
        // 使用刚指定的配置项和数据显示图表。
        esKpiChart.setOption(option);
    }
}