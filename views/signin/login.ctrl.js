'use strict';
angular
    .module('app.core')
    .controller('LoginController', function ($scope, PageValues) {
        //Set page title and description
        PageValues.title = "Store";
        PageValues.description = "Demo cart store";
        //Setup view model object      
        $scope.validateForm = function () {
            var email = document.forms["cform"]["email"].value;
            var passwd = document.forms["cform"]["passwd"].value;
            if (email === '') {
                alert("Email can not be blank");
                return false;
            } else if (passwd === '') {
                alert("Password can not be blank");
                return false;
            }
        }
    });