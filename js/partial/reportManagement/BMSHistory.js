define(function(){
    return BMSHistory
});
var BMSHistory = {
    Render:function () {
        var _this = this;
        _this.tableFunc();
        _this.selectFunc();
    },
    selectFunc:function () {
        require(['./main/enumeration'],function (Enumeration) {
            var bmsTmp = Enumeration.BMS;
            var sppendDce = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',bmsTmp);
            $('#bms-model').html(sppendDce);

        })
    },
    //表格数据
    tableFunc:function () {
        $('#bms-table').bootstrapTable({
            method:'POST',
            dataType:'json',
            cache: false,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'/test/bmsTable',
            striped:true,
            // height: $(window).height() - 400,
            width:$(window).width(),
            pagination:true,
            minimumCountColumns:2,
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            columns: [
                {
                    field: 'id',
                    visible:false
                }, {
                    field: 'name',
                    title : 'BMS名称',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field: 'date',
                    title : '时间',
                    align : 'center',
                    valign : 'middle',
                    width:"11%"
                },
                {
                    field : 'dczxtdc',
                    title : '电池组系统电池电压(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dczxtmxv',
                    title : '电池组系统母线电压(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dczxtmxa',
                    title : '电池组系统母线电流(A)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'soc',
                    title : '电池组系统SOC值',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dtzdv',
                    title : '单体最大电压(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dtzxv',
                    title : '单体最小电压(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dtpjv',
                    title : '单体平均电压(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'soh',
                    title : '电池组系统SOH值',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'doc',
                    title : '单体最高温度(℃)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dod',
                    title : '单体最低温度(℃)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'cfdcs',
                    title : '单体平均温度(℃)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'cfdxl',
                    title : '电池组系统绝缘体',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }]
        });
    }
}