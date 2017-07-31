define( [ '../plugins/mock-min'], function (Mock) {
var errorData = {"success": false,"data": null,"failCode": 404,"params": null,"message": "没有找到此文件"};
Mock.mock("/interface/getPlantInfo",{"success":true,"data":{"plantName":"成都高新区美年电站","plantStatus":"正常","capacity":"1000kW","gridConnectedDate":"2017-5-1","runDays":"80天","plantPhoto":["/images/plantstatus/plant.png","/images/plantstatus/plant.png","/images/plantstatus/plant.png"],"plantAddr":"电站地址"},"error":"","msg":""});
Mock.mock("/interface/getPlantPosition",{"success":true,"data":{"loaction":[104.079373,30.629169]},"error":"","msg":""});
Mock.mock("/interface/getBatteryStatistics",{"success":true,"data":{"rechargeable_power":{"unit":"kWh","value":"7546.21"},"total_charge_power":{"unit":"kWh","value":"65435.21"},"discharge_power":{"unit":"kWh","value":"75424.64"},"total_discharge_power":{"unit":"kWh","value":"875645.6"}},"error":"","msg":""});
Mock.mock("/interface/getPlantRevenue",{"success":true,"data":{"daily_revenue_unit":"元","daily_revenue":3258,"total_revenue_unit":"万元","total_revenue":63528},"error":"","msg":""});
Mock.mock("/interface/getDailyPowerStatistics",{"success":true,"data":{"unit":"千kWh","xData":["上网电量","下网电量","充电量","放电量","用电量"],"yData":[{"name":"上网电量","value":"4"},{"name":"下网电量","value":"6"},{"name":"充电量","value":"3"},{"name":"放电量","value":"8"},{"name":"用电量","value":"7"}]},"error":"","msg":""});
Mock.mock("/interface/getChargeTimes",{"success":true,"data":{"dailyChargeTimes":"10","totalChargeTimes":"5345"},"error":"","msg":""});
Mock.mock("/interface/getChargedCurve",{"success":true,"data":{"time":["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"],"unit":"千kWh","power":[{"name":"充放电功率","value":["4","6","1.5","-1","0","1","2","4","3","1","4","6","1.5","-1","-1.4","1","3","4","6","1"]},{"name":"SOC值","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"name":"SOH值","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]},"error":"","msg":""});
Mock.mock("/interface/getCurrentPower",{"success":true,"data":{"bus_power":"-87.5kW","bus_voltage_a":"10KW","bus_voltage_b":"10KW","bus_voltage_c":"10KW","bus_frequency":"50HZ","unit":"值的单位","device_status":[{"inverter_id":"设备唯一标识","inverter_name":"设备名称","inverter_status":"开机","charge_status":"+","battery_SOC":"24.8%","breaker_status":0,"power":"+15.2kW","batteryCell":"3","unit":"单位"},{"inverter_id":"设备唯一标识","inverter_name":"设备名称","inverter_status":"关机","charge_status":"+","battery_SOC":"电站剩余电量比例","breaker_status":0,"power":"+15.2kW","batteryCell":"3","unit":"单位"},{"inverter_id":"设备唯一标识","inverter_name":"设备名称","inverter_status":"故障","charge_status":"+","battery_SOC":"电站剩余电量比例","breaker_status":1,"power":"+15.3kW","batteryCell":"3","unit":"单位"},{"inverter_id":"设备唯一标识","inverter_name":"设备名称","inverter_status":"开机","charge_status":"+","battery_SOC":"电站剩余电量比例","breaker_status":1,"power":"+16.2kW","batteryCell":"3","unit":"单位"},{"inverter_id":"设备唯一标识","inverter_name":"设备名称","inverter_status":"设备状态","charge_status":"-","battery_SOC":"电站剩余电量比例","breaker_status":0,"power":"-12.5kW","batteryCell":"1","unit":"单位"},{"inverter_id":"设备唯一标识","inverter_name":"设备名称","inverter_status":"设备状态","charge_status":"-","battery_SOC":"电站剩余电量比例","breaker_status":1,"power":"-12.6kW","batteryCell":"3","unit":"单位"}]},"error":"","msg":""});
Mock.mock("/interface/setControlAuthority",{"success":true,"data":{"flag":"true","msg":"设置成功/什么错误"},"error":"","msg":""});
Mock.mock("/interface/startOrTurnOff",{"success":true,"data":{"flag":"true","msg":"设置成功/什么错误"},"error":"","msg":""});
Mock.mock("/interface/setActivePower",{"success":true,"data":{"flag":"true","msg":"设置成功/什么错误"},"error":"","msg":""});
Mock.mock("/interface/setReactivePower",{"success":true,"data":{"flag":"true","msg":"设置成功/什么错误"},"error":"","msg":""});
Mock.mock("/interface/getSingleDevicePower",{"success":true,"data":{"device_id":"设备唯一标识","activepower":"1597.2","reactivepower":"279.4","unit":"单位"},"error":"","msg":""});
Mock.mock("/test/amTable",{"total":800,"rows|10":[{"id|+1":1,"alarmName":"@word(3, 5)","devName":"@word(3, 5)","devType":"@word(3, 5)","alarmLevel|1":["高","中","低"],"type":"@word(3, 5)","status":"@word(3, 5)","occurTime":"@datetime()","alarmStatus":"@word(3, 5)"}]});
Mock.mock("/test/bmsTable",{"total":800,"rows|10":[{"id|+1":1,"name":"@word(3, 5)","date":"@datetime()","dczxtdc":"330","dczxtmxv":"220","dczxtmxa":"15","soc":"45.5%","dtzdv":"330","dtzxv":"110","dtpjv":"220","soh":"25.3%","doc":"45.3","dod":"35.8","cfdcs":"40.8","cfdxl":"52.1"}]});
Mock.mock("/test/pcsTable",{"total":800,"rows|10":[{"id|+1":1,"name":"@word(3, 5)","date":"@datetime()","dczxtdc":"330","dczxtmxv":"220","dczxtmxa":"15","soc":"45.5%","dtzdv":"330","dtzxv":"110","dtpjv":"220","soh":"25.3%","doc":"45.3","dod":"35.8","cfdcs":"40.8","cfdxl":"52.1"}]});
Mock.mock("/test/ahTable",{"total":800,"rows|10":[{"id|+1":1,"name":"@word(3, 5)","date":"@datetime()","dczxtdc":"330","dczxtmxv":"220","dczxtmxa":"15","soc":"45.5%","dtzdv":"330","dtzxv":"110","dtpjv":"220","soh":"25.3%","doc":"45.3","dod":"35.8","cfdcs":"40.8","cfdxl":"52.1"}]});
Mock.mock("/test/rmTable",{"total":800,"rows|10":[{"id|+1":1,"date":"@datetime()","timeLine|+1":["尖(08:00-10:00)","峰(08:00-10:00)","平(08:00-10:00)","谷(08:00-10:00)","当日总计"],"dianjia":"0.56","cdl":3134,"fdl":"1279","cddf":"2479","fddf":"2781","cnsy":"1348","doc":"58.5%","dod":"58.5%","cfdcs":"pxr","cfdxl":"@word(3, 5)"}]});
Mock.mock("http://api.map.baidu.com/telematics/v3/weather?callback=jQuery213032161341261632215_1501509035094&location=104.079373%2C30.629169&output=json&ak=t5uryEXGfrHPNNGbgam7eEl2",{"error":0,"status":"success","date":"2017-07-31","results":[{"currentCity":"成都市","pm25":"55","index":[{"title":"穿衣","zs":"炎热","tipt":"穿衣指数","des":"天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。"},{"title":"洗车","zs":"不宜","tipt":"洗车指数","des":"不宜洗车，未来24小时内有雨，如果在此期间洗车，雨水和路上的泥水可能会再次弄脏您的爱车。"},{"title":"感冒","zs":"少发","tipt":"感冒指数","des":"各项气象条件适宜，发生感冒机率较低。但请避免长期处于空调房间中，以防感冒。"},{"title":"运动","zs":"较不宜","tipt":"运动指数","des":"有降水，推荐您在室内进行低强度运动；若坚持户外运动，须注意选择避雨防滑地点，并携带雨具。"},{"title":"紫外线强度","zs":"弱","tipt":"紫外线强度指数","des":"紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"}],"weather_data":[{"date":"周一 07月31日 (实时：31℃)","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/xiaoyu.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png","weather":"小雨","wind":"无持续风向微风","temperature":"31 ~ 24℃"},{"date":"周二","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/zhenyu.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png","weather":"阵雨转小雨","wind":"无持续风向微风","temperature":"33 ~ 25℃"},{"date":"周三","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/duoyun.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png","weather":"多云转小雨","wind":"无持续风向微风","temperature":"33 ~ 26℃"},{"date":"周四","dayPictureUrl":"http://api.map.baidu.com/images/weather/day/duoyun.png","nightPictureUrl":"http://api.map.baidu.com/images/weather/night/xiaoyu.png","weather":"多云转小雨","wind":"无持续风向微风","temperature":"34 ~ 23℃"}]}]});
   
  $.ajaxPrefilter(function (options, originalOptions, jqXHR) { if((options.type).toUpperCase() == 'GET'){options.cache = true;} (!(/^\//.test(options.url))) && (options.url = "/" + options.url)});
 }); 