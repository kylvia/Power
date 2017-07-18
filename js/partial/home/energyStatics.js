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

        var xData = ['用电','下网','上网','充电','放电'];
        var yData = [{name:'用电',value:'4'},
            {name:'下网',value:'6'},
            {name:'上网',value:'3'},
            {name:'充电',value:'8'},
            {name:'放电',value:'7'}];
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
                name:'千kWh',
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