/**
 * Created by deng on 2017/7/13.
 */
define(function () {
    return Enumeration;
})
var Enumeration={
    DCEnergy:{enum:[{name:'EMS控制',value:'0'},{name:'BMS控制',value:'1'},{name:'调试人员本地控制',value:'2'}]},
    RunningModel:{enum:[{name:'V/F',value:'0'},{name:'恒流模式',value:'1'},{name:'恒压模式',value:'2'},{name:'电池维护模式',value:'3'},{name:'SOC标定模式',value:'4'},{name:'均压维护模式',value:'5'},{name:'P/Q',value:'6'},{name:'I/V',value:'7'},{name:'恒功率模式',value:'8'}]},
    BMS:{enum:[{name:'BMS-01',value:'bms1'},{name:'BMS-02',value:'bms2'}]},
    PCS:{enum:[{name:'PCS-01',value:'bms1'},{name:'PCS-02',value:'bms2'}]},
    Ammeter:{enum:[{name:'电表-01',value:'bms1'},{name:'电表-02',value:'bms2'}]},

}
