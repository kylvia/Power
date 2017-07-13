/**
 * Created by deng on 2017/7/13.
 */

// 使用 Mock
require(["../main"],function(){
    require(["jquery",
        "configure",
        "bootstrap",
        "bootstrap-table",
        "css!/css/common.css"],function($,Configure){
        $(function(){
            $('#topNav li').on('click',function () {
                $('#topNav li').removeClass('active');
                $(this).addClass('active');
                var toPage = $(this).find('a').attr('attr-href');
                var idPage = $(this).find('a').attr('id');
                console.log('[idPage]',idPage);
                $('#mainContainer').load(toPage,function () {
                    console.log('[Configure]',Configure[idPage]);
                    require(Configure[idPage]);
                });
            })
        })
    });
});