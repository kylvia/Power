define(function(){
    return PCSHistory
});
var PCSHistory = {
    Render:function () {
        var _this = this;
        _this.tableFunc();
        _this.selectFunc();
    },
    selectFunc:function () {
        require(['./main/enumeration'],function (Enumeration) {
            var pcsTmp = Enumeration.PCS;
            var sppendDce = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',pcsTmp);
            $('#pcs-model').html(sppendDce);

        })
    },
    //表格数据
    tableFunc:function () {
        $('#pcs-table').bootstrapTable({
            method:'POST',
            dataType:'json',
            cache: false,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'/test/pcsTable',
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
                    title : 'PCS名称',
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
                    title : '交流电压A相有效值(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dczxtmxv',
                    title : '交流电压B相有效值(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dczxtmxa',
                    title : '交流电压C相有效值(V)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'soc',
                    title : '交流电流A相有效值(A)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dtzdv',
                    title : '交流电流B相有效值(A)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dtzxv',
                    title : '交流电流C相有效值(A)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dtpjv',
                    title : '电网频率(Hz)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'soh',
                    title : '有功功率(kW)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'doc',
                    title : '无功功率(kVar)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'dod',
                    title : 'A相GBT温度(℃)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'cfdcs',
                    title : 'B相GBT温度(℃)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }, {
                    field : 'cfdxl',
                    title : 'C相GBT温度(℃)',
                    align : 'center',
                    valign : 'middle',
                    width:"6.5%"
                }]
        });
    }
}