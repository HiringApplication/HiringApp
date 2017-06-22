angular
    .module('altairApp')
    .controller('registerpageCtrl', [
        '$rootScope',
        '$scope',
        'utils',
        '$timeout',
        function ($rootScope,$scope,utils,$timeout) {

            $rootScope.toBarActive = true;
            $rootScope.topMenuActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.toBarActive = false;
                $rootScope.topMenuActive = false;
            });

            // $scope.dateOfbirth=00.00.0000;
            // console.log($scope.dateOfbirth);
            

            // $scope.selectize_val_options = [
            //     { value: 'state board', label: 'State Board' },
            //     { value: 'matriculationt', label: 'Marticulation' },
            //     { value: 'CBSE', label: 'CBSE' }               
            // ];

            // $scope.selectize_val_config = {
            //     maxItems: 1,
            //     valueField: 'value',
            //     labelField: 'label',
            //     create: false,
            //     placeholder: 'Choose Board of Education...'
            // };
                     $scope.selectize_val_options_gender = [
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other...' }
            ];

            $scope.selectize_val_config_gender = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Choose Gender...'
            };
            //  $scope.selectize1_val_options_sslc = [
                
               
            //     { value: '10th', label: '10th' }
            // ];

            // $scope.selectize1_val_config_sslc = {
            //     maxItems: 1,
            //     valueField: 'value',
            //     labelField: 'label',
            //     create: false,
            //     placeholder: 'Choose Degree...'
            // };
            // $scope.selectize2_val_options_hsc = [
                
               
            //     { value: '12th', label: '12th' },
            //     { value: 'diplomo', label: 'Diplomo' }
            // ];

            // $scope.selectize2_val_config_hsc = {
            //     maxItems: 1,
            //     valueField: 'value',
            //     labelField: 'label',
            //     create: false,
            //     placeholder: 'Choose Degree...'
            // };
            // $scope.selectize3_val_options_ug = [
            //     { value: 'BE', label: 'BE' },
            //     { value: 'B.Tech', label: 'B.Tech' },
            //     { value: 'B.Sc', label: 'B.Sc' },
            //     { value: 'BCA', label: 'BCA' }
            // ];

            // $scope.selectize3_val_config_ug = {
            //     maxItems: 1,
            //     valueField: 'value',
            //     labelField: 'label',
            //     create: false,
            //     placeholder: 'Choose Degree...'
            // };
            // $scope.selectize4_val_options_pg = [
            //     { value: 'ME', label: 'ME' },
            //     { value: 'M.Tech', label: 'M.Tech' },
            //     { value: 'M.Sc', label: 'M.Sc' },
            //     { value: 'MCA', label: 'MCA' }
            // ];

            // $scope.selectize4_val_config_pg = {
            //     maxItems: 1,
            //     valueField: 'value',
            //     labelField: 'label',
            //     create: false,
            //     placeholder: 'Choose Degree...'
            // };

            // $scope.form_template = [
            //     [
            //         {
            //             'type': 'text',
            //             'name': 'firstName',
            //             'label': 'First Name'
            //         }
                    
            //     ],
            //     [
            //         {
            //             'type': 'text',
            //             'name': 'company',
            //             'label': 'Company'
            //         }
            //     ]
            
            // ];

            // $scope.form_dynamic = [];
            // $scope.form_dynamic.push($scope.form_template);

            // $scope.form_dynamic_model = [];
            $scope.gender_val_options = [
                { value: 'press', label: 'Male' },
                { value: 'net', label: 'Female' }
                
            ];

            $scope.gender_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Gender'
            };

            $scope.course_val_options = [
                { id:1, value: 'tenth', label: '10th' },
                { id:2, value: 'twelth', label: '12th' },
                { id:3, value: 'ug', label: 'UG' },
                { id:4, value: 'pg', label: 'PG' }
                
            ];

            $scope.course_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Course',
                onInitialize: function(selectize){
                    selectize.on('change', function(value){
                        // console.log(value,"value111111");
                        $scope.department_val_options=[];
                        if(value=='tenth'){
                            $scope.department_val_options=[].concat(['StateBoard','CBSE','Matric']);
                        }else if(value=='twelth'){
                            // $scope.department_val_options=['CBSE','StateBoard'];

                        $scope.department_val_options=[].concat(['CBSE','StateBoard']);
                        }
                        else if(value=='ug'){
                            $scope.department_val_options=[].concat(['B.Tech(CSE)','B.Tech(ECE)','B.Tech(IT)','B.Tech(EEE)','BCA','B.Sc(CS)']);
                        }
                        else if(value=='pg'){
                            $scope.department_val_options=['M.Tech(CSE)','M.Tech(ESE)','M.Tech(IT)','M.Tech(EEE)','MCA','BCA'];
                        }
                        $('#wizard_advanced_form').find('input').trigger('blur')
                    })
                    // receives the selectize object as an argument
                },

            };

            $scope.department_val_options = [];

            $scope.department_val_config = {
                maxItems: 1,
                valueField: 'value',
                labelField: 'label',
                create: false,
                placeholder: 'Dept./Board'
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

            

            $scope.form_dynamicwork = [];
            $scope.form_dynamicwork.push($scope.form_template);

            $scope.form_dynamic_modelwork = [];

            // clone section
            $scope.cloneSectionwork = function($event,$index) {
                $event.preventDefault();
                $scope.form_dynamicwork.push($scope.form_template);
            };

            // delete section
            $scope.deleteSectionwork = function($event,$index) {
                $event.preventDefault();
                $scope.form_dynamic_modelwork.splice($index,1);
                $scope.form_dynamicwork.splice($index,1);
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
                var $formValidate = $('#wizard_advanced_form');
                $formValidate
                .parsley()
                .on('form:validated',function() {
                    console.log($scope.firstname);
                 $scope.$apply();
                })
                .on('field:validated',function(parsleyField) {
                 if($(parsleyField.$element).hasClass('md-input')) {
                  $scope.$apply();
                 }
                });
            },2000);

             setTimeout(function(){
                var $formValidateacademic = $('#wizard_academic_form');
                $formValidateacademic
                .parsley()
                .on('form:validated',function() {
                 $scope.$apply();
                })
                .on('field:validated',function(parsleyField) {
                 if($(parsleyField.$element).hasClass('md-input')) {
                  $scope.$apply();
                 }
                });
            },2000);

             setTimeout(function(){
                var $formValidateadditional = $('#wizard_additional_form');
                $formValidateadditional
                .parsley()
                .on('form:validated',function() {
                 $scope.$apply();
                })
                .on('field:validated',function(parsleyField) {
                 if($(parsleyField.$element).hasClass('md-input')) {
                  $scope.$apply();
                 }
                });
            },2000);

            $scope.show=function(data){
                if(data==true){

                }
            }

              $scope.switches = {switch_g: true };
         }

    ]);