angular
    .module('altairApp')
    .controller('main_sidebarCtrl', [
        '$timeout',
        '$scope',
        '$rootScope',
        '$localStorage',
        function ($timeout,$scope,$rootScope,$localStorage) {
    
            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                $timeout(function() {
                    if(!$rootScope.miniSidebarActive) {
                        // activate current section
                        $('#sidebar_main').find('.current_section > a').trigger('click');
                    } else {
                        // add tooltips to mini sidebar
                        var tooltip_elem = $('#sidebar_main').find('.menu_tooltip');
                        tooltip_elem.each(function() {
                            var $this = $(this);
    
                            $this.attr('title',$this.find('.menu_title').text());
                            UIkit.tooltip($this, {
                                pos: 'right'
                            });
                        });
                    }
                })
            });
    
            // language switcher
            $scope.langSwitcherModel = 'gb';
            var langData = $scope.langSwitcherOptions = [
                {id: 1, title: 'English', value: 'gb'},
                {id: 2, title: 'French', value: 'fr'},
                {id: 3, title: 'Chinese', value: 'cn'},
                {id: 4, title: 'Dutch', value: 'nl'},
                {id: 5, title: 'Italian', value: 'it'},
                {id: 6, title: 'Spanish', value: 'es'},
                {id: 7, title: 'German', value: 'de'},
                {id: 8, title: 'Polish', value: 'pl'}
            ];
            $scope.langSwitcherConfig = {
                maxItems: 1,
                render: {
                    option: function(langData, escape) {
                        return  '<div class="option">' +
                            '<i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i>' +
                            '<span>' + escape(langData.title) + '</span>' +
                            '</div>';
                    },
                    item: function(langData, escape) {
                        return '<div class="item"><i class="item-icon flag-' + escape(langData.value).toUpperCase() + '"></i></div>';
                    }
                },
                valueField: 'value',
                labelField: 'title',
                searchField: 'title',
                create: false,
                onInitialize: function(selectize) {
                    $('#lang_switcher').next().children('.selectize-input').find('input').attr('readonly',true);
                }
            };

            if($localStorage.user_id == 'Student'){
                $scope.sections = [
                    {
                        id: 0,
                        title: 'Home',
                        icon: '&#xE88A;',
                        link: 'restricted.dashboard'
                    },
                    {
                        id: 1,
                        title: 'User Profile',
                        icon: '&#xE87C;',
                        link: 'restricted.pages.user_profile'
                    },
                     {
                        id: 2,
                        title: 'Status',
                        icon: '&#xE616;',
                        link: 'restricted.components.status'
                    },  
                     {
                        id: 3,
                        title: 'Online Test',
                        icon: '&#xE85C;',
                        link: 'restricted.layout.cards'
                    },
                    {
                        id: 4,
                        title: 'Job Openings',
                        icon: '&#xE8F9;',
                        link: 'restricted.notifications.notifications'
                    }
                ]
            }else if($localStorage.user_id == 'Admin'){
                $scope.sections = [

                    {
                        id: 0,
                        title: 'Dashboard',
                        icon: '&#xE871;',
                        link: 'restricted.dashboard_admin'
                    },
                    {
                        id: 1,
                        title: 'Users',
                        icon: '&#xE7FD;',
                        link: 'restricted.candidates.candidates'
                    },

                    {
                        id: 2,
                        title: 'Job Openings',
                        icon: '&#xE8F9;',
                        link: 'restricted.jobopeningsadmin.jobopeningsadmin'
                    },

                    {
                        id: 3,
                        title: 'Online Test',
                        icon: '&#xE3C9;',
                        link: 'restricted.test.test_view'
                    },
                ]
            }
        }
    ])
;