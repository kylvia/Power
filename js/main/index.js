/**
 * Created by deng on 2017/7/13.
 */
require.config({
    baseUrl:'/js/',
    paths: {
        'jquery': 'vendor/jquery/jquery.min',
        'mustache': 'plugins/mustache.min',
        'bootstrap': 'vendor/bootstrap/js/bootstrap',
        'bootstrap-table': 'vendor/bootstrap-table/bootstrap-table',
        'App': 'plugins/App',
        'main': 'main',
        'leaflet': 'plugins/leaflet/leaflet',
        'leafletCluster': 'plugins/laafletMarkercluster/leaflet.markercluster',
        'echarts': 'plugins/echarts/echarts.min',
    },
    shim:{
        'bootstrap':['jquery','css!vendor/bootstrap/css/bootstrap.css'],
        'bootstrap-table':['jquery','css!vendor/bootstrap-table/bootstrap-table.css'],
        'leaflet':['css!plugins/leaflet/leaflet.css'],
        'leafletCluster':['css!plugins/laafletMarkercluster/MarkerCluster.css','css!plugins/laafletMarkercluster/MarkerCluster.Default.css'],
    }
})
// 使用 Mock
require(["jquery",
    "echarts",
    "bootstrap",
    "bootstrap-table",
    "leaflet",
    "leafletCluster"],function($,echarts){
    require(["main",
        "css!/css/index.css"],function(){
        $(function(){
            window.Echarts = echarts;
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