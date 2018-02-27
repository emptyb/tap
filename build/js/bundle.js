(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Sidebar = {

    sidebarToggle: function sidebarToggle(sidebarBtn, menuItem) {
        $(sidebarBtn).on('click', function () {
            if ($('body').hasClass('expanded')) {
                $('body').removeClass('expanded').addClass('short');
                $(menuItem).removeClass('on').removeClass('no-hover');
            } else {
                $('body').addClass('expanded').removeClass('short');
                $(menuItem).addClass('no-hover');
            }
        });
    },

    menuToggle: function menuToggle(menuItem, menuLink) {
        $(menuLink).on('click', function () {
            if ($('body').hasClass('expanded')) {
                $(this).closest(menuItem).toggleClass('on').siblings().removeClass('on');
            }
        });
    },

    submenuActive: function submenuActive(menuItem) {
        $(menuItem).on('click', function () {
            $(this).closest(menuItem).addClass('active').siblings().removeClass('active');
        });
    }

};

$(document).ready(function () {
    Sidebar.sidebarToggle('.sidebar-btn', '.admin-menu__item');
    Sidebar.menuToggle('.admin-menu__item', '.admin-menu__link');
    Sidebar.submenuActive('.sub-menu__item');

    // if($('body').hasClass('short')) {

    var removeSubmenu = function removeSubmenu(submenu, parent) {
        if (!jQuery(':hover').filter($('#' + submenu)).length) {
            parent.removeClass('is-active');
            $('#' + submenu).css({
                display: 'none',
                top: 'auto',
                left: 'auto',
                bottom: 'auto'
            });
        }
    };

    var checkTopDirection = function checkTopDirection(coords, height) {
        return $(window).height() < coords.y + height;
    };

    // sub-menu
    $('.admin-menu__link').hover(function () {
        if ($('body').hasClass('short')) {
            // console.log($('body').hasClass('short'));

            $(this).parent().addClass('is-active');
            var coords = this.getBoundingClientRect(),
                coordX = coords.x + coords.width,
                coordY = coords.y,
                submenu = this.dataset.submenu;

            // console.log(coords);

            $('#' + submenu).css({
                display: 'block',
                top: coordY + 'px',
                left: coordX + 'px',
                position: 'fixed',
                zIndex: 100,
                opacity: 0
            });

            if (checkTopDirection(coords, $('#' + submenu).height())) {
                $('#' + submenu).css({
                    top: 'auto',
                    bottom: $(window).height() - coords.y - coords.height
                });
            }

            $('#' + submenu).css({
                'opacity': 1
            });
        }
    }, function () {
        var submenu = this.dataset.submenu;
        var parent = $(this).parent();
        setTimeout(function () {
            removeSubmenu(submenu, parent);
        }, 100);
    });

    $('.sub-menu--short').on('mouseleave', function () {
        var submenu = this.id;
        $("[data-submenu='" + submenu + "']").parent().removeClass('is-active');

        $(this).css({
            display: 'none',
            top: 'auto',
            left: 'auto',
            bottom: 'auto'
        });
    });

    $('.filter-btn').on('click', function () {
        $(this).closest(".content").addClass('expand-filter').mCustomScrollbar({

            theme: "dark",
            axis: "y",
            live: "on"
            // setHeight: "100px"
        });
    });

    $('.filter-menu__close-btn').on('click', function () {
        $(this).closest(".content").removeClass('expand-filter').mCustomScrollbar("stop");
    });
}());

},{}],2:[function(require,module,exports){
'use strict';

require('./components/navigation');

// import './components/jqueryfloatThead

//
// (function($){
//     $(window).on("load",function(){
//
//     });
// })(jQuery);

$(document).ready(function () {

    var $demo1 = $('.table');
    $demo1.floatThead({
        scrollContainer: function scrollContainer($table) {
            return $table.closest('.table-wrapper');
        }
    });

    var maxHeight = $(window).height();

    $('.content').css({
        maxHeight: maxHeight - 65 + "px"
    });
    $('.table-wrapper').css({
        height: maxHeight - 273 + "px"
    });
}());

$(function () {
    $(window).resize(function () {
        var maxHeight = $(window).height() + "px";

        $('.content').css({
            maxHeight: maxHeight - 65 + "px"
        });
        $('.table-wrapper').css({
            height: maxHeight - 273 + "px"
        });
    });
});

},{"./components/navigation":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQUksVUFBVTs7QUFFVixtQkFBZ0IsdUJBQVcsVUFBWCxFQUF1QixRQUF2QixFQUFpQztBQUM3QyxVQUFFLFVBQUYsRUFBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVc7QUFDakMsZ0JBQUcsRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQixDQUFILEVBQWtDO0FBQzlCLGtCQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLFVBQXRCLEVBQWtDLFFBQWxDLENBQTJDLE9BQTNDO0FBQ0Esa0JBQUUsUUFBRixFQUFZLFdBQVosQ0FBd0IsSUFBeEIsRUFBOEIsV0FBOUIsQ0FBMEMsVUFBMUM7QUFDSCxhQUhELE1BR007QUFDRixrQkFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQixFQUErQixXQUEvQixDQUEyQyxPQUEzQztBQUNBLGtCQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFVBQXJCO0FBQ0g7QUFDSixTQVJEO0FBU0gsS0FaUzs7QUFjVixnQkFBWSxvQkFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCO0FBQ3RDLFVBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVU7QUFDOUIsZ0JBQUssRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQixDQUFMLEVBQW9DO0FBQ2hDLGtCQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLFdBQTFCLENBQXNDLElBQXRDLEVBQTRDLFFBQTVDLEdBQXVELFdBQXZELENBQW1FLElBQW5FO0FBQ0g7QUFDSixTQUpEO0FBS0gsS0FwQlM7O0FBc0JWLG1CQUFlLHVCQUFVLFFBQVYsRUFBb0I7QUFDL0IsVUFBRSxRQUFGLEVBQVksRUFBWixDQUFl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QVU7QUFDUixNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDeEIsWUFBSSxZQUFZLEVBQUUsTUFBRixFQUFVLE1BQVYsS0FBcUIsSUFBckM7O0FBRUEsVUFBRSxVQUFGLEVBQWMsR0FBZCxDQUFrQjtBQUNkLHVCQUFZLFlBQVcsRUFBWixHQUFrQjtBQURmLFNBQWxCO0FBR0EsVUFBRSxnQkFBRixFQUFvQixHQUFwQixDQUF3QjtBQUNwQixvQkFBUyxZQUFZLEdBQWIsR0FBb0I7QUFEUixTQUF4QjtBQUdILEtBVEQ7QUFVSCxDQVhEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxudmFyIFNpZGViYXIgPSB7XG5cbiAgICBzaWRlYmFyVG9nZ2xlIDogZnVuY3Rpb24gKCBzaWRlYmFyQnRuLCBtZW51SXRlbSApe1xuICAgICAgICAkKHNpZGViYXJCdG4pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdleHBhbmRlZCcpKXtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJykuYWRkQ2xhc3MoJ3Nob3J0Jyk7XG4gICAgICAgICAgICAgICAgJChtZW51SXRlbSkucmVtb3ZlQ2xhc3MoJ29uJykucmVtb3ZlQ2xhc3MoJ25vLWhvdmVyJyk7XG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdleHBhbmRlZCcpLnJlbW92ZUNsYXNzKCdzaG9ydCcpO1xuICAgICAgICAgICAgICAgICQobWVudUl0ZW0pLmFkZENsYXNzKCduby1ob3ZlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBtZW51VG9nZ2xlOiBmdW5jdGlvbiAobWVudUl0ZW0sIG1lbnVMaW5rKSB7XG4gICAgICAgICQobWVudUxpbmspLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoICQoJ2JvZHknKS5oYXNDbGFzcygnZXhwYW5kZWQnKSl7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KG1lbnVJdGVtKS50b2dnbGVDbGFzcygnb24nKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdvbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgc3VibWVudUFjdGl2ZTogZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG4gICAgICAgICQobWVudUl0ZW0pLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QobWVudUl0ZW0pLmFkZENsYXNzKCdhY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIFNpZGViYXIuc2lkZWJhclRvZ2dsZSgnLnNpZGViYXItYnRuJywgJy5hZG1pbi1tZW51X19pdGVtJyk7XG4gICAgU2lkZWJhci5tZW51VG9nZ2xlKCcuYWRtaW4tbWVudV9faXRlbScsICcuYWRtaW4tbWVudV9fbGluaycpO1xuICAgIFNpZGViYXIuc3VibWVudUFjdGl2ZSgnLnN1Yi1tZW51X19pdGVtJyk7XG5cbiAgICAvLyBpZigkKCdib2R5JykuaGFzQ2xhc3MoJ3Nob3J0JykpIHtcblxuICAgIHZhciByZW1vdmVTdWJtZW51ID0gZnVuY3Rpb24gKHN1Ym1lbnUsIHBhcmVudCkge1xuICAgICAgICBpZiAoIWpRdWVyeSgnOmhvdmVyJykuZmlsdGVyKCQoJyMnICsgc3VibWVudSkpLmxlbmd0aCkge1xuICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgICQoJyMnICsgc3VibWVudSkuY3NzKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGVja1RvcERpcmVjdGlvbiA9IGZ1bmN0aW9uIChjb29yZHMsIGhlaWdodCkge1xuICAgICAgICByZXR1cm4gJCh3aW5kb3cpLmhlaWdodCgpIDwgY29vcmRzLnkgKyBoZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gc3ViLW1lbnVcbiAgICAkKCcuYWRtaW4tbWVudV9fbGluaycpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCgnYm9keScpLmhhc0NsYXNzKCdzaG9ydCcpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygkKCdib2R5JykuaGFzQ2xhc3MoJ3Nob3J0JykpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciBjb29yZHMgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgICAgIGNvb3JkWCA9IGNvb3Jkcy54ICsgY29vcmRzLndpZHRoLFxuICAgICAgICAgICAgICAgIGNvb3JkWSA9IGNvb3Jkcy55LFxuICAgICAgICAgICAgICAgIHN1Ym1lbnUgPSB0aGlzLmRhdGFzZXQuc3VibWVudTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY29vcmRzKTtcblxuICAgICAgICAgICAgJCgnIycgKyBzdWJtZW51KS5jc3Moe1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgdG9wOiBjb29yZFkgKyAncHgnLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGNvb3JkWCArICdweCcsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgICAgICAgekluZGV4OiAxMDAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjaGVja1RvcERpcmVjdGlvbihjb29yZHMsICQoJyMnICsgc3VibWVudSkuaGVpZ2h0KCkpKSB7XG4gICAgICAgICAgICAgICAgJCgnIycgKyBzdWJtZW51KS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAkKHdpbmRvdykuaGVpZ2h0KCkgLSBjb29yZHMueSAtIGNvb3Jkcy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjJyArIHN1Ym1lbnUpLmNzcyh7XG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHN1Ym1lbnUgPSB0aGlzLmRhdGFzZXQuc3VibWVudTtcbiAgICAgICAgdmFyIHBhcmVudCA9ICQodGhpcykucGFyZW50KCk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmVtb3ZlU3VibWVudShzdWJtZW51LCBwYXJlbnQpXG4gICAgICAgIH0sIDEwMCk7XG4gICAgfSk7XG5cbiAgICAkKCcuc3ViLW1lbnUtLXNob3J0Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWJtZW51ID0gdGhpcy5pZDtcbiAgICAgICAgJChcIltkYXRhLXN1Ym1lbnU9J1wiICsgc3VibWVudSArIFwiJ11cIikucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICQodGhpcykuY3NzKHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgbGVmdDogJ2F1dG8nLFxuICAgICAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZmlsdGVyLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIi5jb250ZW50XCIpLmFkZENsYXNzKCdleHBhbmQtZmlsdGVyJykubUN1c3RvbVNjcm9sbGJhcih7XG5cbiAgICAgICAgICAgIHRoZW1lOlwiZGFya1wiLFxuICAgICAgICAgICAgYXhpczpcInlcIixcbiAgICAgICAgICAgIGxpdmU6IFwib25cIlxuICAgICAgICAgICAgLy8gc2V0SGVpZ2h0OiBcIjEwMHB4XCJcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCcuZmlsdGVyLW1lbnVfX2Nsb3NlLWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQodGhpcykuY2xvc2VzdChcIi5jb250ZW50XCIpLnJlbW92ZUNsYXNzKCdleHBhbmQtZmlsdGVyJykubUN1c3RvbVNjcm9sbGJhcihcInN0b3BcIik7XG4gICAgfSk7XG5cbn0oKSk7XG4iLCJpbXBvcnQgJy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uJztcbi8vIGltcG9ydCAnLi9jb21wb25lbnRzL2pxdWVyeWZsb2F0VGhlYWRcblxuLy9cbi8vIChmdW5jdGlvbigkKXtcbi8vICAgICAkKHdpbmRvdykub24oXCJsb2FkXCIsZnVuY3Rpb24oKXtcbi8vXG4vLyAgICAgfSk7XG4vLyB9KShqUXVlcnkpO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgJGRlbW8xID0gJCgnLnRhYmxlJyk7XG4gICAgJGRlbW8xLmZsb2F0VGhlYWQoe1xuICAgICAgICBzY3JvbGxDb250YWluZXI6IGZ1bmN0aW9uKCR0YWJsZSl7XG4gICAgICAgICAgICByZXR1cm4gJHRhYmxlLmNsb3Nlc3QoJy50YWJsZS13cmFwcGVyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBtYXhIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICAkKCcuY29udGVudCcpLmNzcyh7XG4gICAgICAgIG1heEhlaWdodDogKG1heEhlaWdodCAtNjUpICsgXCJweFwiXG4gICAgfSk7XG4gICAgJCgnLnRhYmxlLXdyYXBwZXInKS5jc3Moe1xuICAgICAgICBoZWlnaHQ6IChtYXhIZWlnaHQgLSAyNzMpICsgXCJweFwiXG4gICAgfSk7XG5cbn0oKSk7XG5cbiQoZnVuY3Rpb24oKXtcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpICsgXCJweFwiO1xuXG4gICAgICAgICQoJy5jb250ZW50JykuY3NzKHtcbiAgICAgICAgICAgIG1heEhlaWdodDogKG1heEhlaWdodCAtNjUpICsgXCJweFwiXG4gICAgICAgIH0pO1xuICAgICAgICAkKCcudGFibGUtd3JhcHBlcicpLmNzcyh7XG4gICAgICAgICAgICBoZWlnaHQ6IChtYXhIZWlnaHQgLSAyNzMpICsgXCJweFwiXG4gICAgICAgIH0pO1xuICAgIH0pXG59KVxuXG4iXX0=
