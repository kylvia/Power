define(function(){
    return energyStatics
});
var energyStatics = {
    Render:function () {

        this.esKpi();
    },
    esKpi:function () {
        console.log(Echarts);
        var esKpiChart = Echarts.init(document.getElementById('cPower'));

        var xData = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19'];
        var legendData = ['充放电功率','SOC值','SOH值'];
        var yData1=['4','6','1.5','-1','0','1','2','4','3','1','4','6','1.5','-1','-1.4','1','3','4','6','1'];
        var yData2=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var yData3=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        var option = {
            color:['#33CC66','#3366CC','#00CCCC'],
            legend: {
                top: '4%',
                textStyle:{
                    color:'#a5e2f9'
                },
                data:legendData
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
                name:'功率（kW）',
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
                    type:'line',
                    data: yData1
                },
                {
                    name:legendData[1],
                    type:'line',
                    data: yData2
                },
                {
                    name:legendData[2],
                    type:'line',
                    data: yData3
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        esKpiChart.setOption(option);
    }
}