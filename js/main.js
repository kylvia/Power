/**
 * Created by deng on 2017/7/13.
 */
define(['plugins/App','main/configure'],function(App,Configure){
    window.App=App;
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
    })
})
