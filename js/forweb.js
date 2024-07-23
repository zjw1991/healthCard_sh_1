var g = {
    fullheight:function(elem,cut) {
        if($(elem).length==0){
            return;
        }
        if(cut==undefined){
            cut=0
        }
        var top = $(elem).offset().top;
        $(elem).css({'height': $(window).height() - top-cut});
        $(window).resize(function () {
            var top = $(elem).offset().top;
            $(elem).css({'height': $(window).height() - top-cut});
        });
    },

    TabShow: function (tabNavID, $pageTabBox, Event) {/*简单的tab切换效果*/
        var $pageTabBox = $($pageTabBox);
        var $pageChild = $pageTabBox.children('div');
        $(tabNavID).children('li').not(".more").bind(Event, function () {
            var $this = $(this);
            var index = $this.index();
           // alert(fn);
            $this.addClass('active').siblings().removeClass('active')
            $pageChild.removeClass('active').hide();
            $pageChild.eq(index).addClass('active').show();
            //return false;
        });
    },
    AlertBox: function (elem, alertBox, obj, callbacksure, callbackclose) { //可以增加关闭和其他按钮的回调函数
        if ($(alertBox).length == 0) {
            return
        }
        if($.ui.Dialog){
            var opt = {
                elem: alertBox,
                overlay: false
            }
            if (typeof obj == 'object') {
                $.extend(opt, obj)
            }
            var Dialog = new $.ui.Dialog(elem, opt);
            $(alertBox).find(".close").click(function () {
                Dialog.close();
                if (typeof callbackclose == 'function') {
                    callbackclose();
                }
            });
            $(alertBox).find(".save_btn").click(function () {
                Dialog.close();
                if (typeof callbacksure == 'function') {
                    callbacksure();
                }
            });
        }
    },
    AlertText: function (elem, obj) {//具体配置请参考Dialog库
        if($.ui.Dialog){
            var Dialog = new $.ui.Dialog(elem, obj);
        }
    }
}

$(function () {
    g.fullheight('.main',30);
    g.fullheight('.main-content',15);
    g.fullheight('.content',30);
});
