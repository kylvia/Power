define(function(){
    return amIdex
});
var amIdex = {
    Render:function () {
        $('#am-table').bootstrapTable({
            method:'POST',
            dataType:'json',
            cache: false,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'/test/amTable',
            striped:true,
            // height: $(window).height() - 200,
            width:$(window).width(),
            pagination:true,
            minimumCountColumns:2,
            rowStyle:function (row,index) {
                var colors = ['#ff4949','#ffcc99','#9999ff'];
                var alarms = ['高','中','低'];
                var ind = alarms.indexOf(row.alarmLevel);
                return {
                    css: {'color':colors[ind]}
                }
            },
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            columns: [
                {
                    field: 'id',
                    visible:false
                },
                {
                    field: '',
                    checkbox:true
                },
                {
                    field : 'alarmName',
                    title : '告警名称',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'devName',
                    title : '设备名称',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'devType',
                    title : '设备类型',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'alarmLevel',
                    title : '告警级别',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'type',
                    title : '类型',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'status',
                    title : '状态',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'occurTime',
                    title : '发成时间',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'alarmStatus',
                    title : '告警状态',
                    align : 'center',
                    valign : 'middle'
                }]
        });
    }
}