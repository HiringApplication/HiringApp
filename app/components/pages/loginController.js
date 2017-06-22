angular
    .module('altairApp')
    .controller('loginCtrl', [
        '$scope',
        '$rootScope',
        '$http',
        'utils',
        '$localStorage',
        '$state',
        function ($scope,$rootScope,$http,utils,$localStorage,$state) {

            $scope.registerFormActive = false;

            var $login_card = $('#login_card'),
                $login_form = $('#login_form'),
                $login_help = $('#login_help'),
                $register_form = $('#register_form'),
                $login_password_reset = $('#login_password_reset');

            // show login form (hide other forms)
            var login_form_show = function() {
                $login_form
                    .show()
                    .siblings()
                    .hide();
            };

            // show register form (hide other forms)
            var register_form_show = function() {
                $register_form
                    .show()
                    .siblings()
                    .hide();
            };

            // show login help (hide other forms)
            var login_help_show = function() {
                $login_help
                    .show()
                    .siblings()
                    .hide();
            };

            // show password reset form (hide other forms)
            var password_reset_show = function() {
                $login_password_reset
                    .show()
                    .siblings()
                    .hide();
            };

            $scope.loginHelp = function($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card,undefined,login_help_show,undefined);
            };

            $scope.backToLogin = function($event) {
                $event.preventDefault();
                $scope.registerFormActive = false;
                utils.card_show_hide($login_card,undefined,login_form_show,undefined);
            };

            $scope.registerForm = function($event) {
                $event.preventDefault();
                $scope.registerFormActive = true;
                utils.card_show_hide($login_card,undefined,register_form_show,undefined);
            };

            $scope.passwordReset = function($event) {
                $event.preventDefault();
                utils.card_show_hide($login_card,undefined,password_reset_show,undefined);
            };
            $scope.dataList=[];
            $http({
                method: 'GET',
                url: 'app/components/pages/loginJson.json'
            }).then(function (res) {
                //alert(res.data);
                console.log(res.data,'data'); 
                $scope.dataList=res.data;                
            });

            $scope.checkEmail = function(){
                $http({
                    method: 'GET',
                    url: 'app/components/pages/loginJson.json'
                }).then(function (data) {
                    //console.log(data,'data');                   
                });
            };

            var user = {};
            $scope.saveVal = function(user){
                console.log(user,'user');
               
                $localStorage.user_id = user.login_username;
                console.log($localStorage.user_id);
                if($localStorage.user_id == 'Student'){
                    $state.go('restricted.dashboard');
                }else if($localStorage.user_id == 'Admin'){
                    $state.go('restricted.dashboard_admin');
                }
            }

        }
    ]);