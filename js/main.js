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
    if (jQuery)(function ($){
            $.fn.extend ({
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
            });

        $(document).ready(function(){
            /*$('img').each(function(){
                var error = false;
                if (!this.complete) {
                    error = true;
                }

                if (typeof this.naturalWidth != "undefined" && this.naturalWidth == 0) {
                    error = true;
                }

                if(error){
                    $(this).bind('error.replaceSrc',function(){
                        this.src = "default_image_here.png";

                        $(this).unbind('error.replaceSrc');
                    }).trigger('load');
                }
            });*/
        });

    }(jQuery));

    main.loadSys = function () {
        console.time('系统界面加载');
        Menu.isLogin();
    }
    main.clearInterCharge = function(inter,domId){

        if(!$('#'+domId).length){
            clearInterval(inter);
            return true;
        }
        return false;
    }
});
