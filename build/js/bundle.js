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
        console.log("bfbfb");
        $(this).closest(".content").addClass('expand-filter');
    });

    $('.filter-menu__close-btn').on('click', function () {
        console.log("bfbfb");
        $(this).closest(".content").removeClass('expand-filter');
    });
}());

},{}],2:[function(require,module,exports){
"use strict";

require("./components/navigation");

// import './components/jqueryfloatThead

//
// (function($){
//     $(window).on("load",function(){
//
//     });
// })(jQuery);

$(document).ready(function () {

    $(".content").mCustomScrollbar({

        theme: "dark",
        axis: "y"
        // setHeight: "100px"
    });

    var $demo1 = $('.table');
    $demo1.floatThead({
        scrollContainer: function scrollContainer($table) {
            return $table.closest('.table-wrapper');
        }
    });
}());

},{"./components/navigation":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzIiwic3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0NBLElBQUksVUFBVTs7QUFFVixtQkFBZ0IsdUJBQVcsVUFBWCxFQUF1QixRQUF2QixFQUFpQztBQUM3QyxVQUFFLFVBQUYsRUFBYyxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVc7QUFDakMsZ0JBQUcsRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQixDQUFILEVBQWtDO0FBQzlCLGtCQUFFLE1BQUYsRUFBVSxXQUFWLENBQXNCLFVBQXRCLEVBQWtDLFFBQWxDLENBQTJDLE9BQTNDO0FBQ0Esa0JBQUUsUUFBRixFQUFZLFdBQVosQ0FBd0IsSUFBeEIsRUFBOEIsV0FBOUIsQ0FBMEMsVUFBMUM7QUFDSCxhQUhELE1BR007QUFDRixrQkFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQixFQUErQixXQUEvQixDQUEyQyxPQUEzQztBQUNBLGtCQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLFVBQXJCO0FBQ0g7QUFDSixTQVJEO0FBU0gsS0FaUzs7QUFjVixnQkFBWSxvQkFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCO0FBQ3RDLFVBQUUsUUFBRixFQUFZLEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVU7QUFDOUIsZ0JBQUssRUFBRSxNQUFGLEVBQVUsUUFBVixDQUFtQixVQUFuQixDQUFMLEVBQW9DO0FBQ2hDLGtCQUFFLElBQUYsRUFBUSxPQUFSLENBQWdCLFFBQWhCLEVBQTBCLFdBQTFCLENBQXNDLElBQXRDLEVBQTRDLFFBQTVDLEdBQXVELFdBQXZELENBQW1FLElBQW5FO0FBQ0g7QUFDSixTQUpEO0FBS0gsS0FwQlM7O0FBc0JWLG1CQUFlLHVCQUFVLFFBQVYsRUFBb0I7QUFDL0IsVUFBRSxRQUFGLEVBQVksRUFBWixDQUFl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QUFSLENBQVk7QUFDUixxQkFBUyxNQUREO0FBRVIsaUJBQUssTUFGRztBQUdSLGtCQUFNLE1BSEU7QUFJUixvQkFBUTtBQUpBLFNBQVo7QUFNSCxLQVZEOztBQVlBLE1BQUUsYUFBRixFQUFpQixFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFVO0FBQ25DLGdCQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsVUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixVQUFoQixFQUE0QixRQUE1QixDQUFxQyxlQUFyQztBQUNILEtBSEQ7O0FBS0EsTUFBRSx5QkFBRixFQUE2QixFQUE3QixDQUFnQyxPQUFoQyxFQUF5QyxZQUFVO0FBQy9DLGdCQUFRLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsVUFBRSxJQUFGLEVBQVEsT0FBUixDQUFnQixVQUFoQixFQUE0QixXQUE1QixDQUF3QyxlQUF4QztBQUNILEtBSEQ7QUFLSCxDQXRGaUIsRUFBbEI7Ozs7O0FDaENBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFlBQVk7O0FBRTFCLE1BQUUsVUFBRixFQUFjLGdCQUFkLENBQStCOztBQUUzQixlQUFNLE1BRnFCO0FBRzNCLGNBQUs7QUFDTDtBQUoyQixLQUEvQjs7QUFPQSxRQUFJLFNBQVMsRUFBRSxRQUFGLENBQWI7QUFDQSxXQUFPLFVBQVAsQ0FBa0I7QUFDZCx5QkFBaUIseUJBQVMsTUFBVCxFQUFnQjtBQUM3QixtQkFBTyxPQUFPLE9BQVAsQ0FBZSxnQkFBZixDQUFQO0FBQ0g7QUFIYSxLQUFsQjtBQU1ILENBaEJpQixFQUFsQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbnZhciBTaWRlYmFyID0ge1xuXG4gICAgc2lkZWJhclRvZ2dsZSA6IGZ1bmN0aW9uICggc2lkZWJhckJ0biwgbWVudUl0ZW0gKXtcbiAgICAgICAgJChzaWRlYmFyQnRuKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnZXhwYW5kZWQnKSl7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpLmFkZENsYXNzKCdzaG9ydCcpO1xuICAgICAgICAgICAgICAgICQobWVudUl0ZW0pLnJlbW92ZUNsYXNzKCdvbicpLnJlbW92ZUNsYXNzKCduby1ob3ZlcicpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnZXhwYW5kZWQnKS5yZW1vdmVDbGFzcygnc2hvcnQnKTtcbiAgICAgICAgICAgICAgICAkKG1lbnVJdGVtKS5hZGRDbGFzcygnbm8taG92ZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgbWVudVRvZ2dsZTogZnVuY3Rpb24gKG1lbnVJdGVtLCBtZW51TGluaykge1xuICAgICAgICAkKG1lbnVMaW5rKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKCAkKCdib2R5JykuaGFzQ2xhc3MoJ2V4cGFuZGVkJykpe1xuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdChtZW51SXRlbSkudG9nZ2xlQ2xhc3MoJ29uJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIHN1Ym1lbnVBY3RpdmU6IGZ1bmN0aW9uIChtZW51SXRlbSkge1xuICAgICAgICAkKG1lbnVJdGVtKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KG1lbnVJdGVtKS5hZGRDbGFzcygnYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICBTaWRlYmFyLnNpZGViYXJUb2dnbGUoJy5zaWRlYmFyLWJ0bicsICcuYWRtaW4tbWVudV9faXRlbScpO1xuICAgIFNpZGViYXIubWVudVRvZ2dsZSgnLmFkbWluLW1lbnVfX2l0ZW0nLCAnLmFkbWluLW1lbnVfX2xpbmsnKTtcbiAgICBTaWRlYmFyLnN1Ym1lbnVBY3RpdmUoJy5zdWItbWVudV9faXRlbScpO1xuXG4gICAgLy8gaWYoJCgnYm9keScpLmhhc0NsYXNzKCdzaG9ydCcpKSB7XG5cbiAgICB2YXIgcmVtb3ZlU3VibWVudSA9IGZ1bmN0aW9uIChzdWJtZW51LCBwYXJlbnQpIHtcbiAgICAgICAgaWYgKCFqUXVlcnkoJzpob3ZlcicpLmZpbHRlcigkKCcjJyArIHN1Ym1lbnUpKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcjJyArIHN1Ym1lbnUpLmNzcyh7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hlY2tUb3BEaXJlY3Rpb24gPSBmdW5jdGlvbiAoY29vcmRzLCBoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuICQod2luZG93KS5oZWlnaHQoKSA8IGNvb3Jkcy55ICsgaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIHN1Yi1tZW51XG4gICAgJCgnLmFkbWluLW1lbnVfX2xpbmsnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQoJ2JvZHknKS5oYXNDbGFzcygnc2hvcnQnKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJCgnYm9keScpLmhhc0NsYXNzKCdzaG9ydCcpKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB2YXIgY29vcmRzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgICAgICAgICBjb29yZFggPSBjb29yZHMueCArIGNvb3Jkcy53aWR0aCxcbiAgICAgICAgICAgICAgICBjb29yZFkgPSBjb29yZHMueSxcbiAgICAgICAgICAgICAgICBzdWJtZW51ID0gdGhpcy5kYXRhc2V0LnN1Ym1lbnU7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvb3Jkcyk7XG5cbiAgICAgICAgICAgICQoJyMnICsgc3VibWVudSkuY3NzKHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIHRvcDogY29vcmRZICsgJ3B4JyxcbiAgICAgICAgICAgICAgICBsZWZ0OiBjb29yZFggKyAncHgnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICAgICAgICAgIHpJbmRleDogMTAwLFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tUb3BEaXJlY3Rpb24oY29vcmRzLCAkKCcjJyArIHN1Ym1lbnUpLmhlaWdodCgpKSkge1xuICAgICAgICAgICAgICAgICQoJyMnICsgc3VibWVudSkuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogJCh3aW5kb3cpLmhlaWdodCgpIC0gY29vcmRzLnkgLSBjb29yZHMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnIycgKyBzdWJtZW51KS5jc3Moe1xuICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdWJtZW51ID0gdGhpcy5kYXRhc2V0LnN1Ym1lbnU7XG4gICAgICAgIHZhciBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJlbW92ZVN1Ym1lbnUoc3VibWVudSwgcGFyZW50KVxuICAgICAgICB9LCAxMDApO1xuICAgIH0pO1xuXG4gICAgJCgnLnN1Yi1tZW51LS1zaG9ydCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3VibWVudSA9IHRoaXMuaWQ7XG4gICAgICAgICQoXCJbZGF0YS1zdWJtZW51PSdcIiArIHN1Ym1lbnUgKyBcIiddXCIpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAkKHRoaXMpLmNzcyh7XG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICAgICAgICB0b3A6ICdhdXRvJyxcbiAgICAgICAgICAgIGxlZnQ6ICdhdXRvJyxcbiAgICAgICAgICAgIGJvdHRvbTogJ2F1dG8nXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgJCgnLmZpbHRlci1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImJmYmZiXCIpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuY29udGVudFwiKS5hZGRDbGFzcygnZXhwYW5kLWZpbHRlcicpO1xuICAgIH0pO1xuXG4gICAgJCgnLmZpbHRlci1tZW51X19jbG9zZS1idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImJmYmZiXCIpO1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoXCIuY29udGVudFwiKS5yZW1vdmVDbGFzcygnZXhwYW5kLWZpbHRlcicpO1xuICAgIH0pO1xuXG59KCkpO1xuIiwiaW1wb3J0ICcuL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XG4vLyBpbXBvcnQgJy4vY29tcG9uZW50cy9qcXVlcnlmbG9hdFRoZWFkXG5cbi8vXG4vLyAoZnVuY3Rpb24oJCl7XG4vLyAgICAgJCh3aW5kb3cpLm9uKFwibG9hZFwiLGZ1bmN0aW9uKCl7XG4vL1xuLy8gICAgIH0pO1xuLy8gfSkoalF1ZXJ5KTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgJChcIi5jb250ZW50XCIpLm1DdXN0b21TY3JvbGxiYXIoe1xuXG4gICAgICAgIHRoZW1lOlwiZGFya1wiLFxuICAgICAgICBheGlzOlwieVwiXG4gICAgICAgIC8vIHNldEhlaWdodDogXCIxMDBweFwiXG4gICAgfSk7XG5cbiAgICB2YXIgJGRlbW8xID0gJCgnLnRhYmxlJyk7XG4gICAgJGRlbW8xLmZsb2F0VGhlYWQoe1xuICAgICAgICBzY3JvbGxDb250YWluZXI6IGZ1bmN0aW9uKCR0YWJsZSl7XG4gICAgICAgICAgICByZXR1cm4gJHRhYmxlLmNsb3Nlc3QoJy50YWJsZS13cmFwcGVyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxufSgpKTtcblxuIl19
