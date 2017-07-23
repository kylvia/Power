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
    }
}