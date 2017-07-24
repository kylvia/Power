/**
 * Created by Taylor on 2017/7/23.
 */
module.exports = {
    amTable : {
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
            "occurTime": "@datetime()",
            "alarmStatus": "@word(3, 5)"
        }]
    },
    bmsTable : {
        "total": 800,
        'rows|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name": "@word(3, 5)",
            "date": "@datetime()",
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
    pcsTable : {
        "total": 800,
        'rows|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name": "@word(3, 5)",
            "date": "@datetime()",
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
    ahTable : {
        "total": 800,
        'rows|10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
            "name": "@word(3, 5)",
            "date": "@datetime()",
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
    rmTable : {"total":800,"rows":[{"id":1,"date":"1974-03-25 10:22:33","timeLine":"尖(08:00-10:00)","dianjia":"0.56","cdl":3134,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"pxr","cfdxl":"xnnc"},{"id":2,"timeLine":"峰(08:00-10:00)","dianjia":"0.56","cdl":3578,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"dgq","cfdxl":"ttua"},{"id":3,"timeLine":"平(08:00-10:00)","dianjia":"0.56","cdl":3464,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"dfos","cfdxl":"vzfd"},{"id":4,"timeLine":"谷(08:00-10:00)","dianjia":"0.56","cdl":3769,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"uvm","cfdxl":"ibts"},{"id":5,"timeLine":"当日总计","dianjia":"0.56","cdl":3544,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"rvws","cfdxl":"ebl"},{"id":6,"date":"2014-08-18 22:20:25","timeLine":"尖(08:00-10:00)","dianjia":"0.56","cdl":3464,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"ozmdn","cfdxl":"kfgdl"},{"id":7,"timeLine":"峰(08:00-10:00)","dianjia":"0.56","cdl":3785,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"shszn","cfdxl":"lgzk"},{"id":8,"timeLine":"平(08:00-10:00)","dianjia":"0.56","cdl":3017,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"kyufw","cfdxl":"vhvk"},{"id":9,"timeLine":"谷(08:00-10:00)","dianjia":"0.56","cdl":3947,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"tiwe","cfdxl":"king"},{"id":10,"timeLine":"当日总计","dianjia":"0.56","cdl":3619,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"hfjvf","cfdxl":"rrzb"}]}
}