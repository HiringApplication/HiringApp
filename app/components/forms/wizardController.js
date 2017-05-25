angular
    .module('altairApp')
    .controller('wizardCtrl', [
        '$scope',
        'utils',
        function ($scope,utils) {

           

            $scope.selectize_val_options = [
                { value: 'press', label: 'Press' },
                { value: 'net', label: 'Internet' },
                { value: 'mouth', label: 'Word of mouth' },
                { value: 'other', label: 'Other...' }
            ];

            $scope.selectize_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Choose...'
            };

            $scope.form_template = [
                [
                    {
                        'type': 'text',
                        'name': 'firstName',
                        'label': 'First Name'
                    }
                    
                ],
                [
                    {
                        'type': 'text',
                        'name': 'company',
                        'label': 'Company'
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
           
             var $wizard_advanced_form = $('#wizard_advanced_form');

            $scope.finishedWizard = function() {
                var form_serialized = JSON.stringify( utils.serializeObject($wizard_advanced_form), null, 2 );
                UIkit.modal.alert('<p>Wizard data:</p><pre>' + form_serialized + '</pre>');
            };
             setTimeout(function(){
    var $formValidate = $('#basicview');
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
     },500);


        }
    ]);