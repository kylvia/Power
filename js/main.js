/**
 * Created by deng on 2017/7/13.
 */
'use strict';
define(['plugins/App','main/configure','plugins/right'],function(App,Configure,Menu){
    window.App=App;
    window.Menu = Menu;

    // if (typeof window.main != 'undefined' && !window.main) {
    //     window.main = {};
    // }
    window.main = {};
    if (jQuery)(function ($){$.fn.extend ({
        loadPage: function (url, params, callback) {
            var $this = $(this);
            if (App.getClassOf(params) == 'Function') {
                callback = params;
                params = {};
            }
            !params && (params = {});

            var preLoad = url.replace('.html','');
            var action = Configure[preLoad];
            var loadMainPage = function () {
                require(action.styles || [], function () {
                    $this.empty();
                    $this.load(url, function (data, status, xhr) {
                        var loadList = [];
                        action.loadJs && (loadList = loadList.concat(action.loadJs));
                        require(loadList, function () {
                            $.each(arguments, function (i, arg) {
                                if (arg) {
                                    App.getClassOf(arg.Render) == 'Function' &&
                                    $(function () {
                                        try {
                                            arg.Render(params);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    });
                                }
                            });
                            App.getClassOf(callback) == 'Function' && callback(data, arguments);
                        });
                    });
                });
            };
            loadMainPage();
        }
    });}(jQuery));

    main.loadSys = function () {
        console.time('系统界面加载');
        Menu.checkLogin(function () {
            $('#sysBody').loadPage('partial/main.html');
        })
       /* if(!Menu.isLogin()){
            $('#sysBody').loadPage('partial/login.html');
        }else {
            window.Echarts = echarts;
            window.Mustache = mustache;
            $('#sysBody').loadPage('partial/main.html');
        }*/
    }
    main.clearInterCharge = function(inter,domId){

        if(!$('#'+domId).length){
            clearInterval(inter);
            return true;
        }
        return false;
    }
});
