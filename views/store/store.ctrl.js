'use strict';
angular
    .module('app.core')
    .controller('StoreController', function ($scope, PageValues, $http) {
        //Set page title and description
        PageValues.title = "Store";
        PageValues.description = "Demo cart store";
        //Setup view model object        
        var vm = this;
        $http.get('views/store/data.json').success(function (data) {
            vm.data = data;
        });

        var homeString = null;
        var currency = "USD";
        var currencySymbol = "$";
        simpleCart({
            checkout: {
                type: "SendForm",
                url: "https://www.vendease.com/control?ModelName=PpMod&FunctionName=expco",
                method: "POST"
            },
            cartStyle: 'table',
            cartColumns: [
              { attr: "name", label: "Name" },
              { attr: "price", label: "Price", view: 'currency' },
              { attr: "sipping", label: "Shipping", view: 'currency' },
              { view: "decrement", label: false },
              { attr: "quantity", label: "Qty" },
              { view: "increment", label: false },
              { attr: "total", label: "SubTotal", view: 'currency' }
            ],
            "currency: \"": currency,
            "taxRate": 0
        });

        simpleCart.bind("beforeCheckout", function (data) {
            if (simpleCart.quantity() == 0) {
                return false;
            }
        });

        if (homeString != null) {
            simpleCart.shipping(function () {
                var total = 0;
                var cnt = 0;
                var sip = 0;
                simpleCart.each(function (item) {
                    cnt += item.quantity();
                    sip = item.get('sipping');
                });
                if (cnt > 12) cnt = 12;
                total += cnt * sip * (1 - cnt / 12);
                return total;
            });
        }

        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        var Mailagent = "";
        if (iOS) {
            Mailagent = "sms:sales@vendease.com";
        } else if (isMac) {
            Mailagent = "imessage:sales@vendease.com";
        } else {
            Mailagent = "mailto:sales@vendease.com";
        }
        $("#idLearnMore").attr("href", Mailagent);

        $("#idContinueShopping").click(function () {
            $('html, body').animate({
                scrollTop: $("#main").offset().top
            }, 1000);
        });
    })
    .directive('scrollOnClick', function () {
        return {
            restrict: 'A',
            link: function (scope, $elm) {
                $elm.on('click', function () {
                    $('html, body').animate({
                        scrollTop: $("#idCartsection").offset().top
                    }, 1000);
                });
            }
        }
    });