'use strict';
angular
    .module('app.core')
    .controller('RegisterController', function ($scope, PageValues) {
        //Set page title and description
        PageValues.title = "Register";
        PageValues.description = "Demo cart store";
        //Setup view model object        
        $scope.validateForm = function () {
            var email = document.forms["cform"]["email"].value;
            var passwd = document.forms["cform"]["passwd"].value;
            var passwdtoo = document.forms["cform"]["passwdtoo"].value;
            var refereremail = document.forms["cform"]["refereremail"].value;
            if (email === '') {
                alert("Email can not be blank");
                return false;
            } else if (passwd === '') {
                alert("Password can not be blank");
                return false;
            } else if (passwdtoo !== passwd) {
                alert("The confirmed password is not same as password");
                return false;
            } else if (refereremail === '') {
                alert("Referer's Email can not be blank");
                return false;
            }
        }
    });
