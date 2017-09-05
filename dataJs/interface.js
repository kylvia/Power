module.exports = {
    loginAuth:{
        success:true,
        error:'',
        msg:''
    },
    isLogin:{
        success:true,
        error:'true',
        msg:'登陆失败'
    },
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
                "/images/plantstatus/plant1.png"
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
                "unit": "kVA",
                "value": "243"
            },
            "total_charge_power": {
                "unit": "%",
                "value": "80"
            },
            "discharge_power": {
                "unit": "万kW",
                "value": "275.4"
            },
            "total_discharge_power": {
                "unit": "%",
                "value": "898"
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
    //收益统计
    getRevenueBar:{
        success:true,
        data:{
            "unit":"元",
            "date":[3,4,5,6,7,8,9,10,11,12,13],
            "revenue":[1025,2015,713,2851,2964,861,2348,2861,1592,567,2135]
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
    //充放电量柱状图
    getChargedBar:{
        success:true,
        data:{
            "date": [4,5,6,7,8,9,10,11,12,13,14],
"unit": "kWh",
    "power": [{
                "name": "充电量",
                "value": [2145,1758,1257,987,2345,845,1547,1023,845,567,1987]
},
        {
            "name": "放电量",
            "value": [1025,2015,713,2851,2964,1789,1302,1345,1592,530,1578]
        }
        ]
        },
        error:'',
        msg:''
    },
    //实时功率曲线
    getChargedCurve:{
        success:true,
        data:{
            "date": [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
"unit": "kW",
    "power": [{
                "name": "充放电功率",
                "value": [-145,158,22,356,235,145,247,23,486,256,-200,159,400,257,87,345,45,47,123,-45,-67,187]
},
        {
            "name": "电网功率",
            "value": [125,215,-13,251,264,189,102,345,192,30,478,25,-215,313,151,264,189,-132,345,92,30,-78]
        },
        {
            "name": "用电功率",
            "value": [458,0,200,100,304,258,1,-300,-247,20,456,325,300,478,54,-100,189,102,345,192,-30,-178]
        }
        ]
        },
        error:'',
        msg:''
    },
    //ems曲线
    getCurrentEMS:{
        success:true,
        data:{
            currentCurve:{
                "time": ['0:00','0:15','0:30','0:45','1:00','1:15','1:30','1:45','2:00','2:15','2:30','2:45','3:00','3:15','3:30','3:45','4:00','4:15','4:30','4:45','5:00','5:15','5:30','5:45','6:00'],
                "unit": "A",
                "name": "电流",
                "value": [20,20,20,20,20,-40,-40,-40,-40,-40,-40,-40,-40,80,80,80,80,-50,-50,-50,-50,-50,-50,-50,-50]

            },

            chargeSet:{
                "total": 4,
                'rows|4': [{
                    "name|+1": ["时间段1","时间段2","时间段3","时间段4"],
                    "start_time|+1": ["0:00","4:00","12:00","16:00"],
                    "stop_time|+1": ["4:00","12:00","16:00","0:00"],
                    "power_set|+1": [20,0,80,-50]
                }]
            }
        },
        error:'',
        msg:''
    },
    //组态实时信息 废弃
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
    //组态实时信息
    getDynamicData:{
        success:true,
        data:{
            "bus_activepower|1": ["-487.5kW","402.7kW"],
            "bus_current": "10A",
            "bus_frequency": "49.9Hz",
            "bus_reactivepower": "2000kVar",
            "bus_voltage": "200V",
            "dc_current": "10A",
            "dc_power": "234kW",
            "dc_voltage": "200V"
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
            "msg": "切换控制权限 成功/失败"
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
                    "power_set1": "22.22"
                },
                {
                    "start_time2": "6:20",
                    "stop_time2": "14:40",
                    "power_set2": "-22.23"
                },
                {
                    "start_time3": "6:20",
                    "stop_time3": "16:40",
                    "power_set3": "-19.22"
                },
                {
                    "start_time4": "16:40",
                    "stop_time4": "23:59",
                    "power_set4": "22.05"
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
    //运行模式设置
    setRunningMode:{
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
    //告警管理

    alarmQuery: {
        success:true,
        data:{
            "total": 800,
            'maxId|1':[12,2,22,23],
            'rows|10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'alarm_id|+1': 1,
                "alarm_name": "@word(3, 5)",
                "device_name": "@word(3, 5)",
                "device_type": "@word(3, 5)",
                "alarm_level|1": [
                    "高",
                    "中",
                    "低"
                ],
                "alarm_type": "@word(3, 5)",
                "status_name": "@word(3, 5)",
                "change_time": "@datetime(yyyy-MM-dd HH:mm:ss:s)",
                "status": "@word(3, 5)"
            }]
        },
        "error": false,
        "msg": ''
    },
    alarmClean:{
        success:true,
        "error": false,
        "msg": '清除成功'
    },
    alarmConfirm:{
        success:true,
        "error": false,
        "msg": '确认成功'
    },
//    报表管理——电站运行报表
    runningReport: {
        success:true,
        data:{
            "total": 800,
            'maxId|1':[12,2,22,23],
            'rows|10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'alarm_id|+1': 1,
                "alarm_name": "@word(3, 5)",
                "device_name": "@word(3, 5)",
                "device_type": "@word(3, 5)",
                "alarm_level|1": [
                    "高",
                    "中",
                    "低"
                ],
                "alarm_type": "@word(3, 5)",
                "status_name": "@word(3, 5)",
                "change_time": "@datetime(yyyy-MM-dd HH:mm:ss:s)",
                "status": "@word(3, 5)"
            }]
        },
        "error": false,
        "msg": ''
    },

}