module.exports = {
    getPlantInfo:{
        success:true,
        data:{
            "plantName": "成都高新区美年电站",
            "plantStatus": "正常",
            "capacity": "1000kW",
            "gridConnectedDate": "2017-5-1",
            "runDays": "80天",
            "loaction": [30.629169,104.079373],
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
            "bus_voltage_b|1": ["110.25KW","230KW","178.69KW"],
            "bus_voltage_c|1": ["120.29KW","200KW","278.32KW"],
            "bus_frequency": "50HZ",
            "unit": "值的单位",
            "device_status": [
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "0",
                    "charge_status|1": [0,1],
                    "battery_SOC": "24.8%",
                    "breaker_status|1": [0,1],
                    "power": "15.2kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "1",
                    "charge_status": 0,
                    "battery_SOC": "52%",
                    "breaker_status|1": [0,1],
                    "power": "15.2kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "2",
                    "charge_status": 0,
                    "battery_SOC": "52%",
                    "breaker_status|1": [0,1],
                    "power": "15.3kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "1",
                    "charge_status": 1,
                    "battery_SOC": "52%",
                    "breaker_status|1": [0,1],
                    "power": "16.2kW",
                    "batteryCell": "3",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "2",
                    "charge_status": 1,
                    "battery_SOC": "52%",
                    "breaker_status|1": [0,1],
                    "power": "12.5kW",
                    "batteryCell": "1",
                    "unit": "单位"
                },
                {
                    "inverter_id": "设备唯一标识",
                    "inverter_name": "设备名称",
                    "inverter_status": "0",
                    "charge_status": 0,
                    "battery_SOC": "电站剩余电量比例",
                    "breaker_status|1": [0,1],
                    "power": "12.6kW",
                    "batteryCell": "3",
                    "unit": "单位"
                }
            ]
        },
        error:'',
        msg:''
    },
    //PCS页面
    getCurrentPCS: {
        "success": true,
        'data|6': [
            {
                "device_id|+1": [
                    "pcs00001",
                    "pcs00002",
                    "pcs00003",
                    "pcs00004",
                    "pcs00005",
                    "pcs00006"
                ],
                "device_name|+1": [
                    "PCS01",
                    "PCS02",
                    "PCS03",
                    "PCS04",
                    "PCS05",
                    "PCS06"
                ],
                "uina_rms": "0.00 V",
                "uinb_rms": "0.00 V",
                "uinc_rms": "0.00 V",
                "iina_rms": "0.00 A",
                "iinb_rms": "0.00 A",
                "iinc_rms": "0.00 A",
                "frequency": "0.00 HZ",
                "activepower": "0.00 kW",
                "reactivepower": "0.00 kW",
                "ubtra_ever": "0.00 V",
                "ibtra_ever": "0.00 A",
                "pbtra": "0.00 kW",
                "igbt_tempa0_ever": "0.00 ℃",
                "igbt_tempb0_ever": "0.00 ℃",
                "igbt_tempc0_ever": "0.00 ℃",
                "sysstate1_11|1": [0,1],
                "sysstate1_10|1": [0,1],
                "sysstate1_9|1": [0,1],
                "sysstate1_8|1": [0,1],
                "sysstate1_7|1": [0,1],
                "sysstate1_6|1": [0,1],
                "sysstate1_5|1": [0,1],
                "sysstate1_4|1": ["EMS正在控制","BMS正在控制","正在调试"],
                "sysstate1_13|1": ["默认模式","电池维护模式","SOC标定模式","均压维护模式","恒压充放电模式"],
                "sysstate1_0|1": [0,1,2],
                "connected": 1
            }],
        "error": false,
        "msg": ''
    },
    setControlAuthority:{
        success:true,
        data:{
            "device_name": "设备名称",
            "time": "执行时间",
            "flag": "true/false",
            "msg": "切换EMS控制 成功/失败"
        },
        error:'',
        msg:''
    },
    //设置窗体数据
    getCurrentSet:{
        success:true,
        data:{
            "device_id": "设备id",
            "device_name": "设备名称",
            "controlAuthority|1": [0,1,2],
            "runningMode|1": [0,1,2,3,4,5,6,7,8],
            "xftg_en|1": [0,1],
            "periods": [
                {
                    "start_time1": "0:00",
                    "stop_time1": "6:20",
                    "power_set1": "+22.22"
                },
                {
                    "start_time2": "6:20",
                    "stop_time2": "14:40",
                    "power_set2": "-22.23"
                },
                {
                    "start_time3": "6:20",
                    "stop_time3": "16:40",
                    "power_set3": "+19.22"
                },
                {
                    "start_time4": "16:40",
                    "stop_time4": "23:59",
                    "power_set4": "+22.05"
                }
            ]
        },
        error:'',
        msg:''
    },
    startOrTurnOff:{
        success:true,
        data:{

            "device_id": "设备id",
            "device_name": "设备名称",
            "time": "执行时间",
            "flag": "true/false",
            "msg": "开/关/急停机成功/失败"
        },
        error:'',
        msg:''
    },
    //设置使能
    setXFTG_en:{
        success:true,
        data:{
            "device_id": "设备id",
            "device_name": "设备名称",
            "time": "执行时间",
            "flag": "true/false",
            "msg": "设置充放电使能 成功/失败"
        },
        error:'',
        msg:''
    },
    setChargeTime:{
        success:true,
        data:{
            "device_name": "设备名称",
            "time": "执行时间",
            "flag": "true/false",
            "msg": "设置时间 成功/失败"},
        error:'',
        msg:''
    },
    setActivePower:{
        success:true,
        data:{
            "device_name": "设备名称",
            "time": "执行时间",
            "flag": "true/false",
            "msg": "切换EMS控制 成功/失败"},
        error:'',
        msg:''
    },
    setReactivePower:{
        success:true,
        data:{"flag":"true","msg":"设置成功/什么错误"},
        error:'',
        msg:''
    },
    checkUserRights:{
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
    //BMS页面
    getCurrentBMS: {
        "success": true,
        'data|6': [
            {
                "device_id|+1": [
                    "bms00001",
                    "bms00002",
                    "bms00003",
                    "bms00004",
                    "bms00005",
                    "bms00006"
                ],
                "device_name|+1": [
                    "BMS01",
                    "BMS02",
                    "BMS03",
                    "BMS04",
                    "BMS05",
                    "BMS06"
                ],
                "volt_cellmax": "3.247V",
                "num_cellvoltmax": "052",
                "volt_cellmin": "3.232V",
                "num_cellvoltmin": "052",
                "volt_cellavg": "3.247V",
                "temp_cellmax": "36.4℃",
                "num_tempmax": "052",
                "temp_cellmin": "28.4℃",
                "num_tempmin": "052",
                "temp_cellave": "32℃",
                "udc_ever": "327V",
                "idc_ever": "23A",
                "insulation_res": "1005",
                "curr_chgLimit": "12A",
                "curr_dchLimit": "55A",
                "power_chgLimit": "12W",
                "power_dchLimit": "12W",
                "chg_packvoltmax_limit": "12V",
                "chg_cellvoltmax_limit": "12V",
                "soc|1": ["85%","60%","25%","40%","55%","30%"],
                "soh": "1005",
                "bms_lifesignal|1": [0,1],
                "bms_relaystatus|1": [0,1],
                "connected|1": [0,1],
                "bms_mode|1": [50,23,13,3],
            }
            ],
        "error": false,
        "msg": ''
    },
}