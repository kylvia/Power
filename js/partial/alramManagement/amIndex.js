define(function(){
    return amIdex
});
var amIdex = {
    interval:'',
    tableIds:[],
    maxIdcache:0,
    queryStatus:false,
    Render:function () {

        var _this = this;
        _this.getTableData();
        if(_this.interval) clearInterval(_this.interval);
        _this.interval = setInterval(function(){
            // $("#am-table").bootstrapTable('destroy');
            // _this.interTableData()

            $.ajax({
                url:'interface/alarmQuery',
                type:'post',
                dataType:'JSON',
                data:_this.getQueryData(),
                success:function (result) {
                    if(result.success){
                        if(result.data.maxId > _this.maxIdcache){
                            // $("#am-table").bootstrapTable('destroy');
                            _this.maxIdcache = result.data.maxId;
                            $("#am-table").bootstrapTable('load',result.data);
                        }
                    }else {
                        App.alert(result.msg);
                    }
                },
                error:function (e) {
                    console.log(e)
                }
            });
        },5000);

        //查询
        $('#queryBtn').on('click',function(){
            this.queryStatus = true;
            $("#am-table").bootstrapTable('destroy');
            _this.getTableData();
        })

        //清除
        $('#clearBtn').on('click',function(){
            // _this.getTableData();

            if(!_this.tableIds.length){
                App.alert('请勾选至少一条数据！');
                return;
            }

            $.ajax({
                url:'interface/alarmClean',
                type:'post',
                dataType:'JSON',
                data:_this.tableIds.join(','),
                success:function (result) {
                    if(result.success){
                        _this.tableIds = [];
                        App.alert(result.msg,function () {
                            $("#am-table").bootstrapTable('destroy');
                            _this.getTableData()
                        });
                    }else {
                        App.alert(result.msg);
                    }
                },
                error:function (e) {
                    console.log(e)
                }
            });
        })

        //确认
        $('#conformBtn').on('click',function(){
            // _this.getTableData();

            if(!_this.tableIds.length){
                App.alert('请勾选至少一条数据！');
                return;
            }
            $.ajax({
                url:'interface/alarmConfirm',
                type:'post',
                dataType:'JSON',
                data:_this.tableIds.join(','),
                success:function (result) {
                    if(result.success){
                        _this.tableIds = [];
                        App.alert(result.msg,function () {
                            $("#am-table").bootstrapTable('destroy');
                            _this.getTableData()
                        });
                        // $("#am-table").bootstrapTable('destroy');
                        // _this.getTableData();
                    }else {
                        App.alert(result.msg);
                    }
                },
                error:function (e) {
                    console.log(e)
                }
            });
        })


    },
    interTableData : function () {
        $('#am-table').bootstrapTable('refreshOptions',{pageNumber:1});
    },
    getQueryData:function () {
        //获取checkBox数据
        function getCheckData(className){
            var str = '';
            $("."+className).find("input:checked").each(function(){
                str+=$(this).val()+",";
            })
            !!str && (str.slice(-1) === ',') && (str = str.substring(0,str.length-1));
            return str;
        }
        //获取name对应数据
        function getData(){
            var data = {};
            $("#queryForm").find('input[name]').each(function(){
                var dom = $(this);
                data[dom.attr('name')] = dom.val();
            })

            return data
        }

        var querys = getData();
        querys.alarm_level = getCheckData('aiLevel'); //告警级别
        querys.alram_type = getCheckData('aiType'); //告警类型

        return querys
    },
    getTableData:function () {
        var _this = this;
        if(main.clearInterCharge(_this.interval,'alarmManagement'))return;
        $('#am-table').bootstrapTable({
            method:'POST',
            dataType:'json',
            // cache: false,
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            url:'/interface/alarmQuery',
            // url:'/test/amTable',
            striped:true,
            sortName: 'devName',
            // height: $(window).height() - 200,
            width:$(window).width(),
            pagination:true,
            // search:true,
            minimumCountColumns:2,
            queryParams:function(params){
                return {
                    pageInfo : params,
                    param : _this.getQueryData()
                }
            },
            onCheck:function(row){
                _this.tableIds.indexOf(row.alarm_id) ===-1 && _this.tableIds.push(row.alarm_id);
                // console.log( _this.tableIds);
            },
            onUncheck:function(row){
                _this.tableIds.remove(row.alarm_id);
            },
            onClickRow:function(row, $element){
                if($element[0].className === 'selected'){
                    $('#am-table').bootstrapTable('uncheck',$element[0].sectionRowIndex)
                }else {
                    $('#am-table').bootstrapTable('check',$element[0].sectionRowIndex)
                }

            },
            onLoadSuccess:function(data){
                $('#am-table').bootstrapTable('checkBy',{field:"alarm_id", values:_this.tableIds});
            },
            rowStyle:function (row,index) {
                var colors = ['#ff4949','#ffcc99','#9999ff'];
                var alarms = ['高','中','低'];
                var ind = alarms.indexOf(row.alarm_level);
                return {
                    css: {'color':colors[ind]}
                }
            },
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            uniqueId: "id",                     //每一行的唯一标识，一般为主键列
            responseHandler:function(res){
                //远程数据加载之前,处理程序响应数据格式,对象包含的参数: 我们可以对返回的数据格式进行处理
                //在ajax后我们可以在这里进行一些事件的处理
                return res.data;
            },
            columns: [
                {
                    field: 'alarm_id',
                    visible:false,
                    valign : 'middle'
                },
                {
                    field: '',
                    checkbox:true,
                    valign : 'middle',
                    width:"3%"
                },

                {
                    field : 'alarm_name',
                    title : '告警名称',
                    align : 'center',
                    valign : 'middle',
                    sortable: true,
                    width:"12%"
                }, {
                    field : 'device_name',
                    title : '设备名称',
                    align : 'center',
                    valign : 'middle',
                    width:"12%"
                }, {
                    field : 'device_type',
                    title : '设备类型',
                    align : 'center',
                    valign : 'middle',
                    width:"10%"
                }, {
                    field : 'alarm_level',
                    title : '告警级别',
                    align : 'center',
                    valign : 'middle',
                    width:"10%"
                }, {
                    field : 'alarm_type',
                    title : '类型',
                    align : 'center',
                    valign : 'middle',
                    width:"10%"
                }, {
                    field : 'status_name',
                    title : '状态',
                    align : 'center',
                    valign : 'middle',
                    width:"10%"
                }, {
                    field : 'change_time',
                    title : '发成时间',
                    align : 'center',
                    valign : 'middle',
                    width:"10%"
                }, {
                    field : 'status',
                    title : '告警状态',
                    align : 'center',
                    valign : 'middle',
                    width:"10%"
                }]
        });
    }
}