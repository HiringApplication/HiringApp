angular
    .module('altairApp')
    .controller('candidatesController', [
        '$rootScope',
        '$scope',
        '$stateParams',
        'candidates_data',
        'utils',
        'variables',
        function ($rootScope,$scope,$stateParams,candidates_data,utils,variables) {
            
            // function disable_first(){
            //     alert('haikasd');
            // }

            // $('.dropify').dropify();

            // $('.dropify-fr').dropify({
            //     messages: {
            //         default: 'Glissez-déposez un fichier ici ou cliquez',
            //         replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            //         remove:  'Supprimer',
            //         error:   'Désolé, le fichier trop volumineux'
            //     }
            // });
            
            $scope.disablefirst = function(){
                     
            };

             var planets_data = $scope.selectize_planets_options = [
                {id: 1, title: 'C', url: 'http://en.wikipedia.org/wiki/Mercury_(planet)'},
                {id: 2, title: 'C++', url: 'http://en.wikipedia.org/wiki/Venus'},
                {id: 3, title: 'HTML', url: 'http://en.wikipedia.org/wiki/Earth'},
                {id: 4, title: 'CSS', url: 'http://en.wikipedia.org/wiki/Mars'},
                {id: 5, title: 'JavaScript', url: 'http://en.wikipedia.org/wiki/Jupiter'},
                {id: 6, title: 'Jquery', url: 'http://en.wikipedia.org/wiki/Saturn'},
                {id: 7, title: 'PHP', url: 'http://en.wikipedia.org/wiki/Uranus'},
                {id: 8, title: 'Angular Js', url: 'http://en.wikipedia.org/wiki/Neptune'}
            ];

            $scope.selectize_val_options = [
                { value: 'press', label: 'Male' },
                { value: 'net', label: 'Female' },
                { value: 'mouth', label: 'Any' },
                { value: 'other', label: 'Other...' }
            ];

            $scope.selectize_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Choose...'
            };
            $scope.selectize_planets_config = {
                plugins: {
                    'remove_button': {
                        label     : ''
                    }
                },
                maxItems: null,
                valueField: 'id',
                labelField: 'title',
                searchField: 'title',
                create: false,
                render: {
                    option: function(planets_data, escape) {
                        return  '<div class="option">' +
                            '<span class="title">' + escape(planets_data.title) + '</span>' +
                            '</div>';
                    },
                    item: function(planets_data, escape) {
                        return '<div class="item"><a href="' + escape(planets_data.url) + '" target="_blank">' + escape(planets_data.title) + '</a></div>';
                    }
                }
            };

            $rootScope.pageHeadingActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.pageHeadingActive = false;
            });

            $scope.project_name = 'Altair';

            $scope.profile = candidates_data;

            $scope.profile_details = utils.findByItemId($scope.profile, $stateParams.profileId);
// console.log($stateParams.profileId);
            $scope.newTask = {
                name: 'Altair-245',
                assignee: [

                ],
                group: [
                    { name: 'todo', title: 'To Do' },
                    { name: 'inAnalysis', title: 'In Analysis' },
                    { name: 'inProgress', title: 'In Progress' },
                    { name: 'done', title: 'Done' }
                ]
            };

            $scope.newIssue = {
                assignee: {
                    config: {
                        create:false,
                        maxItems: 1,
                        valueField: 'id',
                        labelField: 'title',
                        placeholder: 'Select Assignee...'
                    },
                    options: [
                        { id: 1, title: 'Aleen Grant' },
                        { id: 2, title: 'Tyrese Koss' },
                        { id: 3, title: 'Chasity Green' },
                        { id: 4, title: 'Me' }
                    ]
                }
            };

            $scope.$on('onLastRepeat', function (scope, element, attrs) {

                // issues list tablesorter
                var $ts_issues = $("#ts_issues");
                if($(element).closest($ts_issues).length) {

                    // define pager options
                    var pagerOptions = {
                        // target the pager markup - see the HTML block below
                        container: $(".ts_pager"),
                        // output string - default is '{page}/{totalPages}'; possible variables: {page}, {totalPages}, {startRow}, {endRow} and {totalRows}
                        output: '{startRow} - {endRow} / {filteredRows} ({totalRows})',
                        // if true, the table will remain the same height no matter how many records are displayed. The space is made up by an empty
                        // table row set to a height to compensate; default is false
                        fixedHeight: true,
                        // remove rows from the table to speed up the sort of large tables.
                        // setting this to false, only hides the non-visible rows; needed if you plan to add/remove rows with the pager enabled.
                        removeRows: false,
                        // go to page selector - select dropdown that sets the current page
                        cssGoto: '.ts_gotoPage'
                    };

                    // Initialize tablesorter
                    $ts_issues
                        .tablesorter({
                            theme: 'altair',
                            widthFixed: true,
                            widgets: ['zebra', 'filter']
                        })
                        // initialize the pager plugin
                        .tablesorterPager(pagerOptions)
                        .on('pagerComplete', function (e, filter) {
                            // update selectize value
                            if (typeof selectizeObj !== 'undefined' && selectizeObj.data('selectize')) {
                                selectizePage = selectizeObj[0].selectize;
                                selectizePage.setValue($('select.ts_gotoPage option:selected').index() + 1, false);
                            }

                        });


                        


                    // replace 'goto Page' select
                    function createPageSelectize() {
                        selectizeObj = $('select.ts_gotoPage')
                            .val($("select.ts_gotoPage option:selected").val())
                            .after('<div class="selectize_fix"></div>')
                            .selectize({
                                hideSelected: true,
                                onDropdownOpen: function ($dropdown) {
                                    $dropdown
                                        .hide()
                                        .velocity('slideDown', {
                                            duration: 200,
                                            easing: variables.easing_swiftOut
                                        })
                                },
                                onDropdownClose: function ($dropdown) {
                                    $dropdown
                                        .show()
                                        .velocity('slideUp', {
                                            duration: 200,
                                            easing: variables.easing_swiftOut
                                        });

                                    // hide tooltip
                                    $('.uk-tooltip').hide();
                                }
                            });
                    }

                    createPageSelectize();

                    // replace 'pagesize' select
                    $('.pagesize.ts_selectize')
                        .after('<div class="selectize_fix"></div>')
                        .selectize({
                            hideSelected: true,
                            onDropdownOpen: function ($dropdown) {
                                $dropdown
                                    .hide()
                                    .velocity('slideDown', {
                                        duration: 200,
                                        easing: variables.easing_swiftOut
                                    })
                            },
                            onDropdownClose: function ($dropdown) {
                                $dropdown
                                    .show()
                                    .velocity('slideUp', {
                                        duration: 200,
                                        easing: variables.easing_swiftOut
                                    });

                                // hide tooltip
                                $('.uk-tooltip').hide();

                                if (typeof selectizeObj !== 'undefined' && selectizeObj.data('selectize')) {
                                    selectizePage = selectizeObj[0].selectize;
                                    selectizePage.destroy();
                                    $('.ts_gotoPage').next('.selectize_fix').remove();
                                    setTimeout(function () {
                                        createPageSelectize()
                                    })
                                }

                            }
                        });
                }

            })

        }
    ]);