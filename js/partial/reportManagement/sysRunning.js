define(function(){
    return sysRunning
});
var sysRunning = {
    Render:function () {
        var _this = this;
        _this.tableFunc();
        _this.selectFunc();
    },
    selectFunc:function () {
        require(['./main/enumeration'],function (Enumeration) {
            var ammeterTmp = Enumeration.Ammeter;
            var sppendDce = Mustache.render('{{#enum}} <option value={{value}}>{{name}}</option> {{/enum}}',ammeterTmp);
            $('#ah-model').html(sppendDce);

        })
    },
    //表格数据
    tableFunc:function () {
        $('#ah-table').bootstrapTable({
            method:'POST',
            dataType:'json',
            cache: false,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'/test/ahTable',
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
                    title : '电表名称',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field: 'date',
                    title : '时间',
                    align : 'center',
                    valign : 'middle'
                },
                {
                    field : 'dczxtdc',
                    title : '尖放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dczxtmxv',
                    title : '峰放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dczxtmxa',
                    title : '平放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'soc',
                    title : '谷放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dtzdv',
                    title : '尖充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dtzxv',
                    title : '峰充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dtpjv',
                    title : '平充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'soh',
                    title : '谷充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }]
        });
    }
}