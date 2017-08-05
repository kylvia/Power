module.exports = {
    getPlantInfo:{
        success:true,
        data:{
            "plantName": "成都高新区美年电站",
            "plantStatus": "正常",
            "capacity": "1000kW",
            "gridConnectedDate": "2017-5-1",
            "runDays": "80天",
            "plantPhoto": [
                "/images/plantstatus/plant.png",
                "/images/plantstatus/plant.png",
                "/images/plantstatus/plant.png"
            ],
            "plantAddr": "电站地址"
        },
        error:'',
        msg:''
    },
    getPlantPosition:{
        success:true,
        data:{
            "loaction": [104.079373,30.629169]
        },
        error:'',
        msg:''
    },
    getBatteryStatistics:{
        success:true,
        data:{
            "rechargeable_power": {
                "unit": "kWh",
                "value": "7546.21"
            },
            "total_charge_power": {
                "unit": "kWh",
                "value": "65435.21"
            },
            "discharge_power": {
                "unit": "kWh",
                "value": "75424.64"
            },
            "total_discharge_power": {
                "unit": "kWh",
                "value": "875645.6"
            }
        },
        error:'',
        msg:''
    },
    getPlantRevenue:{
        success:true,
        data:{
            "daily_revenue_unit": "元",
            "daily_revenue": 3258,
            "total_revenue_unit":"万元",
            "total_revenue": 63528
        },
        error:'',
        msg:''
    },
    getDailyPowerStatistics:{
        success:true,
        data:{
            "unit":"千kWh",
            "xData":["上网电量","下网电量","充电量","放电量","用电量"],
            "yData":[{name:'上网电量',value:'4'},
                {name:'下网电量',value:'6'},
                {name:'充电量',value:'3'},
                {name:'放电量',value:'8'},
                {name:'用电量',value:'7'}]
        },
        error:'',
        msg:''
    },
    getChargeTimes:{
        success:true,
        data:{
            "dailyChargeTimes": "10",
            "totalChargeTimes": "5345"
        },
        error:'',
        msg:''
    },
    //实时充放电功率曲线
    getChargedCurve:{
        success:true,
        data:{
            "time": ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19'],
"unit": "千kWh",
    "power": [{
                "name": "充放电功率",
                "value": ['4','6','1.5','-1','0','1','2','4','3','1','4','6','1.5','-1','-1.4','1','3','4','6','1']
},
        {
            "name": "SOC值",
            "value": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        },
        {
            "name": "SOH值",
            "value": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        }
        ]
        },
        error:'',
        msg:''
    },
    //组态实时信息
    getCurrentPower:{
        success:true,
        data:{
            "bus_power": "-87.5kW",
            "bus_voltage_a": "10KW",
            "bus_voltage_b": "10KW",
            "bus_voltage_c": "10KW",
            "bus_frequency": "50HZ",
            "unit": "值的单位",
            "device_status": [
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "开机",
                    "charge_status": "+",
                    "battery_SOC": "24.8%",
                    "breaker_status": 0,
                    "power": "+15.2kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "关机",
                    "charge_status": "+",
                    "battery_SOC": "电站剩余电量比例",
                    "breaker_status": 0,
                    "power": "+15.2kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "故障",
                    "charge_status": "+",
                    "battery_SOC": "电站剩余电量比例",
                    "breaker_status": 1,
                    "power": "+15.3kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "开机",
                    "charge_status": "+",
                    "battery_SOC": "电站剩余电量比例",
                    "breaker_status": 1,
                    "power": "+16.2kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "设备状态",
                    "charge_status": "-",
                    "battery_SOC": "电站剩余电量比例",
                    "breaker_status": 0,
                    "power": "-12.5kW",
                    "batteryCell": "1",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "设备状态",
                    "charge_status": "-",
                    "battery_SOC": "电站剩余电量比例",
                    "breaker_status": 1,
                    "power": "-12.6kW",
                    "batteryCell": "3",
                    "unit": "单位"
                }
            ]
        },
        error:'',
        msg:''
    },
    setControlAuthority:{
        success:true,
        data:{"flag":"true","msg":"设置成功/什么错误"},
        error:'',
        msg:''
    },
    startOrTurnOff:{
        success:true,
        data:{"flag":"true","msg":"设置成功/什么错误"},
        error:'',
        msg:''
    },
    setActivePower:{
        success:true,
        data:{"flag":"true","msg":"设置成功/什么错误"},
        error:'',
        msg:''
    },
    setReactivePower:{
        success:true,
        data:{"flag":"true","msg":"设置成功/什么错误"},
        error:'',
        msg:''
    },
    validateRight:{
        success:true,
        data:{"flag":"true","msg":"设置成功/什么错误"},
        error:'',
        msg:''
    },
    getSingleDevicePower:{
        success:true,
        data:{
            "device_id": "设备唯一标识",
            "activepower": "1597.2",
            "reactivepower": "279.4",
            "unit": "单位"
        },
        error:'',
        msg:''
    },
}