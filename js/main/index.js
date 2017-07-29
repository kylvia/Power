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
        'mCustomScrollbar': 'plugins/mCustomScrollbar/jquery.mCustomScrollbar.concat.min',
        'App': 'plugins/App',
        'main': 'main',
        'Cookies': 'plugins/Cookies',
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
        'mCustomScrollbar':['jquery','css!plugins/mCustomScrollbar/jquery.mCustomScrollbar.min.css'],
        'MapUtil':['leaflet'],
        'right':['Cookies']
    }
})
// 使用 Mock
require(["jquery",
    "echarts",
    "mustache",
    "WdatePicker",
    "Cookies",
    "bootstrap",
    "leaflet",
    "bootstrap-table",
    "bootstrap-table-zh"],function($,echarts,mustache){
    require([
        "main",
        "css!/css/index.css"],function(){
        window.Echarts=echarts;
        window.Mustache = mustache;

        $(function(){
            main.loadSys();
        })
    });
});