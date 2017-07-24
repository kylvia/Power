/**
 * Created by deng on 2017/7/13.
 */
define(function () {
    return Enumeration;
})
var Enumeration={
    DCEnergy:{enum:[{name:'EMS控制',value:'ems'},{name:'BMS控制',value:'bms'},{name:'调试人员本地控制',value:'local'}]},
    RunningModel:{enum:[{name:'V/F',value:'vf'},{name:'恒流模式',value:'cc'},{name:'恒压模式',value:'cv'},{name:'电池维护模式',value:'bm'},{name:'SOC标定模式',value:'soc'},{name:'均压维护模式',value:'up'},{name:'P/Q',value:'pq'},{name:'I/V',value:'iv'},{name:'恒功率模式',value:'cp'}]},
    BMS:{enum:[{name:'BMS-01',value:'bms1'},{name:'BMS-02',value:'bms2'}]},
    PCS:{enum:[{name:'PCS-01',value:'bms1'},{name:'PCS-02',value:'bms2'}]},
    Ammeter:{enum:[{name:'电表-01',value:'bms1'},{name:'电表-02',value:'bms2'}]},

}
