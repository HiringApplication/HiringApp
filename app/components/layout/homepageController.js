angular
    .module('altairApp')
    .controller('homepageCtrl', [
        '$rootScope',
        '$scope',
        '$timeout',
        function ($rootScope,$scope,$timeout) {

         

            $scope.$on('$destroy', function() {
                $rootScope.fullHeaderActive = false;
            });
        }
    ]);