angular
    .module('altairApp')
    .controller('test_addCtrl', [
        '$scope',
        '$window',
        '$timeout',
        '$rootScope',
        function ($scope,$window,$timeout,$rootScope) {


            $('.dropify').dropify();

            $('.dropify-fr').dropify({
                messages: {
                    default: 'Glissez-déposez un fichier ici ou cliquez',
                    replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
                    remove:  'Supprimer',
                    error:   'Désolé, le fichier trop volumineux'
                }
            });

            

             $scope.selectize_val_options = [
                    { value: 'Option A', label: 'Option A'},
                    { value: 'Option B', label: 'Option B'},
                    { value: 'Option C', label: 'Option C' },
                    { value: 'Option D', label: 'Option D' }
                ];

                $scope.selectize_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Answer...'
            };

            $scope.form_template = [
                [
                    {
                        'questions': '',
                        'option_a': '',
                        'option_b': '',
                        'option_c': '',
                        'option_d': '',
                        'answer' : ''
                    }
                    
                ]
                
                ];
                

            $scope.form_dynamic = [];
            $scope.form_dynamic.push($scope.form_template);

            $scope.form_dynamic_model = [];

            // clone section
            $scope.cloneSection = function($event,$index) {
                $event.preventDefault();
                $scope.form_dynamic.push($scope.form_template);
            };

            // delete section
            $scope.deleteSection = function($event,$index) {
                $event.preventDefault();
                $scope.form_dynamic_model.splice($index,1);
                $scope.form_dynamic.splice($index,1);
            };

            $scope.$on('onLastRepeat', function (scope, element, attrs) {
                altair_uikit.reinitialize_grid_margin();
            });


            var $formValidate = $('#form_validation');

            $formValidate
                .parsley()
                .on('form:validated',function() {
                    $scope.$apply();
                })
                .on('field:validated',function(parsleyField) {
                    if($(parsleyField.$element).hasClass('md-input')) {
                        $scope.$apply();
                    }
                });

        }
    ]);