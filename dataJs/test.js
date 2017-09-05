/**
 * Created by Taylor on 2017/7/23.
 */
module.exports = {
    amTable: {
        "total": 800,
        'rows|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "alarmName": "@word(3, 5)",
            "devName": "@word(3, 5)",
            "devType": "@word(3, 5)",
            "alarmLevel|1": [
                "高",
                "中",
                "低"
            ],
            "type": "@word(3, 5)",
            "status": "@word(3, 5)",
            "occurTime": "@datetime(yyyy-MM-dd HH:mm:ss:s)",
            "alarmStatus": "@word(3, 5)"
        }]
    },
    bmsTable: {
        "total": 800,
        'rows|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name": "@word(3, 5)",
            "date": "@datetime(yyyy-MM-dd HH:mm:ss:s)",
            "dczxtdc": "330",
            "dczxtmxv": "220",
            "dczxtmxa": "15",
            "soc": "45.5%",
            "dtzdv": "330",
            "dtzxv": "110",
            "dtpjv": "220",
            "soh": "25.3%",
            "doc": "45.3",
            "dod": "35.8",
            "cfdcs": "40.8",
            "cfdxl": "52.1"
        }]
    },
    pcsTable: {
        "total": 800,
        'rows|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name": "@word(3, 5)",
            "date": "@datetime(yyyy-MM-dd HH:mm:ss:s)",
            "dczxtdc": "330",
            "dczxtmxv": "220",
            "dczxtmxa": "15",
            "soc": "45.5%",
            "dtzdv": "330",
            "dtzxv": "110",
            "dtpjv": "220",
            "soh": "25.3%",
            "doc": "45.3",
            "dod": "35.8",
            "cfdcs": "40.8",
            "cfdxl": "52.1"
        }]
    },
    ahTable: {
        "total": 800,
        'rows|10': []
    },
    rmTable: {
        "total": 800,
        "rows|10": [{
            "id|+1": 1,
            "date": "@datetime(yyyy-MM-dd HH:mm:ss:s)",
            "timeLine|+1": [
                "尖(08:00-10:00)",
                "峰(08:00-10:00)",
                "平(08:00-10:00)",
                "谷(08:00-10:00)",
                "当日总计"
            ],
            "dianjia": "0.56",
            "cdl": 3134,
            "fdl": "1279",
            "cddf": "2479",
            "fddf": "2781",
            "cnsy": "1348",
            "doc": "58.5%",
            "dod": "58.5%",
            "cfdcs": "pxr",
            "cfdxl": "@word(3, 5)"
        }]
    },
    emsTable: {
        success:true,
        "total": 4,
        'rows|4': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name|+1": ["时间段1","时间段2","时间段3","时间段4"],
            "timeS|+1": ["0:00","4:00","12:00","16:00"],
            "timeE|+1": ["4:00","12:00","16:00","0:00"],
            "eca|+1": [20,0,80,-50]
        }]
    }
}