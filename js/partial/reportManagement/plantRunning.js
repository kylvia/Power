define(function(){
    return plantRunning
});
var plantRunning = {
    Render:function () {
        var _this = this;
        _this.datePicker();
        _this.tableFunc();
    },
    //日历控件
    datePicker:function () {
        $('.slider-item').on('click',function () {
            $('.slider-item').removeClass('slider-on');
            $(this).addClass('slider-on');
            var formatterVal;
            $('#prd4311,#prd4312').val('');
            $(this).text() === '日' ? formatterVal = 'yyyy-MM-dd ': formatterVal = 'yyyy-MM';
            $('#prd4311').unbind().on('click',function () {
                WdatePicker({maxDate:'#F{$dp.$D(\'prd4312\');}',readOnly:true,dateFmt:formatterVal})
            })
            $('#prd4312').unbind().on('click',function () {
                WdatePicker({minDate:'#F{$dp.$D(\'prd4311\');}',readOnly:true,dateFmt:formatterVal})
            })
        })
        $('.slider-item').eq(0).click();
    },
    //表格数据
    tableFunc:function () {
        $('#rm-table').bootstrapTable({
            method:'POST',
            dataType:'json',
            cache: false,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'/test/rmTable',
            striped:true,
            // height: $(window).height() - 400,
            width:$(window).width(),
            pagination:true,
            minimumCountColumns:2,
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            onLoadSuccess: function (data) {
                $('#rm-table').bootstrapTable('mergeCells', {index: 0, field: 'date', rowspan: 5});
                $('#rm-table').bootstrapTable('mergeCells', {index: 5, field: 'date', rowspan: 5});
            },
            columns: [
                {
                    field: 'id',
                    visible:false
                }, {
                    field: 'date',
                    title : '时间',
                    align : 'center',
                    valign : 'middle'
                },
                {
                    field : 'timeLine',
                    title : '时段',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dianjia',
                    title : '电价(元/kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'cdl',
                    title : '充电量(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'fdl',
                    title : '放电量(kWh)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'cddf',
                    title : '充电电费(元)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'fddf',
                    title : '放电电费(元)',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'cnsy',
                    title : '储能收益',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'doc',
                    title : 'DOC',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'dod',
                    title : 'DOD',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'cfdcs',
                    title : '充放电次数',
                    align : 'center',
                    valign : 'middle'
                }, {
                    field : 'cfdxl',
                    title : '充放电效率',
                    align : 'center',
                    valign : 'middle'
                }]
        });
    }
}