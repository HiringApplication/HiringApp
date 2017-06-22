angular
    .module('altairApp')
    .controller('profile_editCtrl', [
        '$scope',
        '$stateParams',
        'test_data',
        'utils',
        'variables',
        '$filter',
        function ($scope,$stateParams,test_data,utils,variables,$filter) {
            $scope.form_dynamic = [];
            $scope.test = test_data;

            // console.log($scope.test,'asdasda');
            // console.log($scope.test,'$scope.test');
            // var data=$filter($scope.test){'id':$stateParams.cat_id};
            // console.log(data,'data');
            // console.log(typeof($stateParams.cat_id),'$stateParams.cat_id');

            // $scope.test_details = utils.findByItemId($scope.test,4);
            // console.log($scope.test_details,'tets');
            $scope.data=$filter('filter')($scope.test, {id:$stateParams.cat_id })[0];
            // $scope.data.questions = [{question:1}, {question:2},{question:3}];
            // $scope.form_dynamic=$scope.data.questions;
           console.log($scope.data.photo,'$scope.test');
            console.log($scope.form_dynamic,'data');

            // console.log($scope.data,'data');

            // $scope.roll_no = 0;
            // roll_no = roll_no+1;

            // $('.dropify').dropify();

            // $('.dropify-fr').dropify({
            //     messages: {
            //         default: 'Glissez-déposez un fichier ici ou cliquez',
            //         replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            //         remove:  'Supprimer',
            //         error:   'Désolé, le fichier trop volumineux'
            //     }
            // });
            // $scope.data.photo = 'assets/img/others/bootstrap.jpg';
            $('.dropify').dropify({
                tpl: {
                    wrap:            '<div class="dropify-wrapper"></div>',
                    loader:          '<div class="dropify-loader"></div>',
                    message:         '<div class="dropify-message"><span class="file-icon" /> <p>{{ default }}</p></div>',
                    preview:         '<div class="dropify-preview"><span class="dropify-render"><img src="'+$scope.data.photo+'"></span><div class="dropify-infos"><div class="dropify-infos-inner"><p class="dropify-infos-message">{{ replace }}</p></div></div></div>',
                    filename:        '<p class="dropify-filename"><span class="file-icon"></span> <span class="dropify-filename-inner"></span></p>',
                    clearButton:     '<button type="button" class="dropify-clear">{{ remove }}</button>',
                    errorLine:       '<p class="dropify-error">{{ error }}</p>',
                    errorsContainer: '<div class="dropify-errors-container"><ul></ul></div>'
                }
            });


         
            /*$scope.option_a="";
           console.log($scope.option_a,'jjjjjjjj');
           $scope.optionAValue=[];
           $scope.selectize_val_options = [];
$scope.getOptionvalue=function(section){*/
                // console.log(value,'hhhh');
                // $scope.optionAValue=[];
                // $scope.optionAValue.push(value);
               /* $scope.optionAValue = section.optionAValue || 'Option A';
                $scope.selectize_val_options = [
                    { value: 'a', label: $scope.optionAValue},
                    { value: 'b', label: $scope.optionBValue},
                    { value: 'c', label: 'Option C' },
                    { value: 'd', label: 'Option D' }
                ];
            }*/
            $scope.selectize_val_options = [
                    { value: 'Option A', label: 'Option A'},
                    { value: 'Option B', label: 'Option B'},
                    { value: 'Option C', label: 'Option C' },
                    { value: 'Option D', label: 'Option D' }
                ];
            /*$scope.getOptionvalue_b=function(value){
                 console.log(value,'hhhh');
                 $scope.optionBValue=[];
                 $scope.optionBValue.push(value);
                $scope.selectize_val_options = [
                    { value: 'a', label: $scope.optionAValue || 'Option A'},
                    { value: 'b', label: $scope.optionBValue || 'Option B'},
                    { value: 'c', label: 'Option C' },
                    { value: 'd', label: 'Option D' }
                ];
            }*/
            //console.log($scope.optionAValue,'optionAValue');
            



            $scope.selectize_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Answer...'
            };

            // $scope.form_template = [
            //         {'questions':'','option_a':'','option_b':'','option_c':'','option_d':'','answer':''}
            // ];


            // console.log($scope)


            // $scope.form_dynamic = [];
           $scope.form_dynamic.push({
            'q_id' : '1',
            'questions':'The price of 10 chairs is equal to that of 4 tables. The price of 15 chairs and 2 tables together is Rs. 4000. The total price of 12 chairs and 3 tables is:',
            'option_a':'Rs. 3500',
            'option_b':'Rs. 3750',
            'option_c':'Rs. 4500',
            'option_d':'Rs. 7200',
            'answer':'Option A'
        },
        {
            'q_id' : '2',
            'questions':'1One pipe can fill a tank three times as fast as another pipe. If together the two pipes can fill the tank in 36 minutes, then the slower pipe alone will be able to fill the tank in: ',
            'option_a':'Rs. 9,423',
            'option_b':'Rs. 9,452',
            'option_c':'Rs. 8,789',
            'option_d':'Rs. 7,457',
            'answer':'Option D'
        },
        {
            'q_id' : '3',
            'questions':'A train passes a station platform in 36 seconds and a man standing on the platform in 20 seconds. If the speed of the train is 54 km/hr, what is the length of the platform? ',
            'option_a':'120m',
            'option_b':'50m',
            'option_c':'75m',
            'option_d':'130',
            'answer':'Option D'
        }
        );
           // console.log(form_dynamic[1],'hhhhhh');
            // $scope.form_dynamic.push({'questions':'','option_a':'','option_b':'','option_c':'','option_d':'','answer':''});
            console.log($scope.form_dynamic);
            // console.log(form_dynamic.questions,'fffff');
            $scope.form_dynamic_model = [];


            // clone section
            $scope.cloneSection = function($event,$index) {
                $event.preventDefault();
                $scope.form_dynamic.push({'questions':'','option_a':'','option_b':'','option_c':'','option_d':'','answer':''});
                 // $scope.form_dynamic.push({'questions':'','option_a':'','option_b':'','option_c':'','option_d':'','answer':''});
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
             /*setTimeout(function(){
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
     },500);*/


        }
    ]);