angular
    .module('altairApp')
    .controller('candidates_addCtrl', [
        '$scope',
        'utils',
        function ($scope,utils) {

            $('.dropify').dropify();

             $('.dropify-fr').dropify({
                 messages: {
                     default: 'Glissez-déposez un fichier ici ou cliquez',
                     replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
                     remove:  'Supprimer',
                     error:   'Désolé, le fichier trop volumineux'
                 }
             });          

    //           $scope.countries = {
    //     'usa': {
    //         'San Francisco': ['SOMA', 'Richmond', 'Sunset'],
    //         'Los Angeles': ['Burbank', 'Hollywood']
    //     },
    //     'canada': {
    //         'People dont live here': ['igloo', 'cave']
    //     }
    // };
            // $scope.selectize_val_options = [
            //     { value: 'press', label: 'Press' },
            //     { value: 'net', label: 'Internet' },
            //     { value: 'mouth', label: 'Word of mouth' },
            //     { value: 'other', label: 'Other...' }
            // ];

            // $scope.selectize_val_config = {
            //     maxItems: 1,
            //     valueField: 'value',
            //     labelField: 'label',
            //     create: false,
            //     placeholder: 'Choose...'
            // };

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
                        $('#basicview').find('input').trigger('blur')
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




// angular
//     .module('altairApp')
//     .controller('candidates_addCtrl', [
//         '$scope',
        
//         function ($scope) {
           

//             $('.dropify').dropify();

//             $('.dropify-fr').dropify({
//                 messages: {
//                     default: 'Glissez-déposez un fichier ici ou cliquez',
//                     replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
//                     remove:  'Supprimer',
//                     error:   'Désolé, le fichier trop volumineux'
//                 }
//             });



//         }
//     ]);