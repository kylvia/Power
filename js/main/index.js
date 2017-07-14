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
    },
    shim:{
        'bootstrap':['jquery','css!vendor/bootstrap/css/bootstrap.css'],
        'bootstrap-table':['jquery','css!vendor/bootstrap-table/bootstrap-table.css'],
    }
})
// 使用 Mock
require(["jquery",
    "bootstrap",
    "bootstrap-table"],function($){
    require(["main",
        "css!/css/index.css"],function(){
        $(function(){
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