/**
 * Created by deng on 2017/7/13.
 */
require.config({
    baseUrl:'/js/',
    paths: {
        'jquery': 'vendor/jquery/jquery.min',
        'mustache': 'plugins/mustache.min',
        'bootstrap': 'vendor/bootstrap/js/bootstrap',
        'bootstrap-table': 'plugins/bootstrap-table/bootstrap-table',
        'bootstrap-table-zh': 'plugins/bootstrap-table/bootstrap-table-zh-CN',
        'App': 'plugins/App',
        'main': 'main',
        'echarts': 'plugins/echarts/echarts.min',
        'leaflet':'plugins/Leaflet/leaflet',
        'WdatePicker':'plugins/My97DatePicker/WdatePicker',
        'MapUtil':'plugins/Leaflet/MapUtil'
    },
    shim:{
        'bootstrap':['jquery','css!vendor/bootstrap/css/bootstrap.css'],
        'bootstrap-table':['bootstrap','css!plugins/bootstrap-table/bootstrap-table.css'],
        'bootstrap-table-zh':['bootstrap-table'],
        'leaflet':['css!plugins/Leaflet/leaflet.css'],
        'MapUtil':['leaflet'],
    }
})
// 使用 Mock
require(["jquery",
    "echarts",
    "mustache",
    "WdatePicker",
    "bootstrap",
    "leaflet",
    "bootstrap-table",
    "bootstrap-table-zh"],function($,echarts,mustache){
    require(["main",
        "css!/css/index.css"],function(){
        $(function(){
            window.Echarts = echarts;
            window.Mustache = mustache;
            $('#topNav li').on('click',function () {
                $('#topNav li').removeClass('active');
                $(this).addClass('active');
                var toPage = $(this).find('a').attr('attr-href');
                $('#mainContainer').loadPage(toPage);
            });
            $('#topNav li').eq(0).click();
        })
    });
});