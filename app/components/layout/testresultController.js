angular
    .module('altairApp')
    .controller('testresultCtrl', [
        '$rootScope',
        '$scope',
        '$timeout',
        '$state',
        function ($rootScope,$scope,$timeout,$state) {

            $rootScope.toBarActive = false;
            $rootScope.topMenuActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.toBarActive = false;
                $rootScope.topMenuActive = false;
            });
            $scope.test = [
                {
                    qid: 1,
                    question: '16, 33, 65, 131, 261, (....) ',
                    menu1: '523',
                    menu2: '521',
                    menu3: '613',
                    menu4: '721',
                    answer: '2'
                },
                {
                    qid: 2,
                    question: 'The price of 10 chairs is equal to that of 4 tables. The price of 15 chairs and 2 tables together is Rs. 4000. The total price of 12 chairs and 3 tables is:',
                    menu1: 'Rs. 3500',
                    menu2: 'Rs. 3750',
                    menu3: 'Rs. 3840',
                    menu4: 'Rs. 3900',
                    answer: '2'
                },
                {
                    qid: 3,
                    question: '4, 6, 8, 9, 10, 11, 12 ',
                    menu1: '10',
                    menu2: '11',
                    menu3: '12',
                    menu4: '9',
                    answer: '2'
                },
                {
                    qid: 4,
                    question: 'Simran started a software business by investing Rs. 50,000. After six months, Nanda joined her with a capital of Rs. 80,000. After 3 years, they earned a profit of Rs. 24,500. What was Simran share in the profit? ',
                    menu1: 'Rs. 9,423',
                    menu2: 'Rs. 10,250',
                    menu3: 'Rs. 12,500',
                    menu4: 'Rs. 10,500',
                    answer: '2'
                },
                {
                    qid: 5,
                    question: '1One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in: ',
                    menu1: '81 min.',
                    menu2: '108 min.',
                    menu3: '144 min.',
                    menu4: '192 min.',
                    answer: '2'
                },
                {
                    qid: 6,
                    question: 'A clock is started at noon. By 10 minutes past 5, the hour hand has turned through: ',
                    menu1: '145º',
                    menu2: '150º',
                    menu3: '155º',
                    menu4: '160º',
                    answer: '2'
                },
                {
                    qid: 7,
                    question: 'The least number, which when divided by 12, 15, 20 and 54 leaves in each case a remainder of 8 is: ',
                    menu1: '504',
                    menu2: '536',
                    menu3: '548',
                    menu4: '544',
                    answer: '2'
                },
                {
                    qid: 8,
                    question: 'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform? ',
                    menu1: ' 120 m',
                    menu2: '240 m',
                    menu3: '300 m',
                    menu4: 'None of these',
                    answer: '2'
                },
                {
                    qid: 9,
                    question: 'Gauri went to the stationers and bought things worth Rs. 25, out of which 30 paise went on sales tax on taxable purchases. If the tax rate was 6%, then what was the cost of the tax free items? ',
                    menu1: 'Rs. 15',
                    menu2: 'Rs. 15.70',
                    menu3: 'Rs. 19.70',
                    menu4: ' Rs. 20',
                    answer: '2'
                },
                {
                    qid: 10,
                    question: 'The banker gain on a bill due 1 year hence at 12% per annum is Rs. 6. The true discount is: ',
                    menu1: 'Rs. 72',
                    menu2: 'Rs. 36',
                    menu3: 'Rs. 54',
                    menu4: 'Rs. 50',
                    answer: '2'
                },
                {
                    qid: 11,
                    question: 'In covering a distance of 30 km, Abhay takes 2 hours more than Sameer. If Abhay doubles his speed, then he would take 1 hour less than Sameer. Abhay speed is: ',
                    menu1: '5 kmph',
                    menu2: '6 kmph',
                    menu3: '6.25 kmph',
                    menu4: '7.5 kmph',
                    answer: '2'
                },

            ]
            
            // all
                $scope.allPages = [
                    {
                        title: 'Accordions',
                        link: 'restricted.components.accordion',
                        image: 'assets/img/gallery/Image01.jpg'
                    },
                    {
                        title: 'Breadcrumbs',
                        link: 'restricted.components.breadcrumbs',
                        image: 'assets/img/gallery/Image02.jpg'
                    },
                    {
                        title: 'Buttons',
                        link: 'restricted.components.buttons',
                        image: 'assets/img/gallery/Image03.jpg'
                    },
                    {
                        title: 'Buttons: FAB',
                        link: 'restricted.components.buttons_fab',
                        image: 'assets/img/gallery/Image04.jpg'
                    },
                    {
                        title: 'Cards',
                        link: 'restricted.components.cards',
                        image: 'assets/img/gallery/Image05.jpg'
                    },
                    {
                        title: 'Colors',
                        link: 'restricted.components.colors',
                        image: 'assets/img/gallery/Image06.jpg'
                    },
                    {
                        title: 'Common',
                        link: 'restricted.components.common',
                        image: 'assets/img/gallery/Image07.jpg'
                    },
                    {
                        title: 'Dropdowns',
                        link: 'restricted.components.dropdowns',
                        image: 'assets/img/gallery/Image08.jpg'
                    },
                    {
                        title: 'Dynamic Grid',
                        link: 'restricted.components.dynamic_grid',
                        image: 'assets/img/gallery/Image09.jpg'
                    },
                    {
                        title: 'Footer',
                        link: 'restricted.components.footer',
                        image: 'assets/img/gallery/Image10.jpg'
                    },
                    {
                        title: 'Grid',
                        link: 'restricted.components.grid',
                        image: 'assets/img/gallery/Image11.jpg'
                    },
                    {
                        title: 'Icons',
                        link: 'restricted.components.icons',
                        image: 'assets/img/avatars/profile.png'
                    },
                    {
                        title: 'Lightbox/Modal',
                        link: 'restricted.components.modal',
                        image: 'assets/img/gallery/Image13.jpg'
                    },
                    {
                        title: 'Lists',
                        link: 'restricted.components.lists',
                        image: 'assets/img/gallery/Image14.jpg'
                    },
                    {
                        title: 'Nestable',
                        link: 'restricted.components.nestable',
                        image: 'assets/img/gallery/Image15.jpg'
                    },
                    {
                        title: 'Notifications',
                        link: 'restricted.components.notifications',
                        image: 'assets/img/gallery/Image16.jpg'
                    },
                    {
                        title: 'Panels',
                        link: 'restricted.components.panels',
                        image: 'assets/img/gallery/Image17.jpg'
                    },
                    {
                        title: 'Preloaders',
                        link: 'restricted.components.preloaders',
                        image: 'assets/img/gallery/Image18.jpg'
                    },
                    {
                        title: 'Slideshow',
                        link: 'restricted.components.slideshow',
                        image: 'assets/img/gallery/Image19.jpg'
                    },
                    {
                        title: 'Sortable',
                        link: 'restricted.components.sortable',
                        image: 'assets/img/gallery/Image20.jpg'
                    },
                    {
                        title: 'Tables',
                        link: 'restricted.components.tables',
                        image: 'assets/img/gallery/Image21.jpg'
                    },
                    {
                        title: 'Tables Examples',
                        link: 'restricted.components.tables_examples',
                        image: 'assets/img/gallery/Image22.jpg'
                    },
                    {
                        title: 'Tabs',
                        link: 'restricted.components.tabs',
                        image: 'assets/img/gallery/Image23.jpg'
                    },
                    {
                        title: 'Tooltips',
                        link: 'restricted.components.tooltips',
                        image: 'assets/img/gallery/Image24.jpg'
                    },
                    {
                        title: 'Typography',
                        link: 'restricted.components.typography',
                        image: 'assets/img/gallery/Image12.jpg'
                    }
                ];

 $scope.counter = 10;
    $scope.onTimeout = function(){
        if ($scope.counter >= 0) $scope.counter--;
        mytimeout = $timeout($scope.onTimeout,1000);
                if($scope.counter == 0){
                 
                 $state.go('restricted.dashboard');
                //alert($state);
                //console.log($state);
         }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

        }
    ]);
altairApp.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])