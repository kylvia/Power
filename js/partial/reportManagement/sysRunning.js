define(function(){
    return sysRunning
});
var sysRunning = {
    Render:function () {
        var _this = this;
        _this.tableFunc();
        _this.selectFunc();

        //查询
        $('#queryBtn').on('click',function(){
            $("#ah-table").bootstrapTable('refresh', {url:'/interface/meterHisData'});
        })
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
            url:'/interface/meterHisData',
            responseHandler:function(res){
                //远程数据加载之前,处理程序响应数据格式,对象包含的参数: 我们可以对返回的数据格式进行处理
                //在ajax后我们可以在这里进行一些事件的处理
                return res.data;
            },
            queryParams:function(params){
                var query = {
                    pageInfo : params,
                    param : $('#queryForm').getForm()
                };
                console.log(query);
                return query
            },
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
                    field: 'time',
                    title : '时间',
                    align : 'center',
                    valign : 'middle'
                },
                {
                    field : 'pointDischarge',
                    title : '尖放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'peakDischarge',
                    title : '峰放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'flatDischarge',
                    title : '平放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'valleyDischarge',
                    title : '谷放电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'tipCharging',
                    title : '尖充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'peakCharging',
                    title : '峰充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'flatCharge',
                    title : '平充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'valleyCharging',
                    title : '谷充电电能(kWh)',
                    align : 'center',
                    valign : 'middle'
                }]
        });
    }
}