define(function(){
    return energyStatics
});
var energyStatics = {
    Render:function () {

        this.esKpi();
    },
    esKpi:function () {
        console.log(Echarts);
        var esKpiChart = Echarts.init(document.getElementById('esCcurPower'));

        var xData = ['00','01','02','03'];
        var legendData = ['充放电功率','SOC值','SOH值'];
        var yData1=['4','6','5','9'];
        var yData = [{name:'00',value:'4'},
            {name:'01',value:'6'},
            {name:'02',value:'3'},
            {name:'03',value:'8'}];
        var cutColor = ['#33CC66','#3366CC','#00CCCC','#D06052'];
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
                name:'xx（kW）',
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
                    name:legendData[0],
                    type:'bar',
                    barWidth: '30%',
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