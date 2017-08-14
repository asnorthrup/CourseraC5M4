(function () {
'use strict';

angular.module('Spinner')
.component('loadingSpinner', {
  templateUrl: 'src/spinner/loadingspinner.template.html',
  controller: SpinnerController
});


SpinnerController.$inject = ['$rootScope']
function SpinnerController($rootScope) {
  var $ctrl = this;
  var cancellers = []; //array of cancellers
  //start listening for events.
  $ctrl.$onInit = function () { //start of transition
    var cancel = $rootScope.$on('$stateChangeStart', //remember function that starts this
    function(event, toState, toParams, fromState, fromParams, options){
      $ctrl.showSpinner = true; //turns on spinner image
    });
    cancellers.push(cancel); //push onto cancels array

    cancel = $rootScope.$on('$stateChangeSuccess', //turn of spinner if successful
    function(event, toState, toParams, fromState, fromParams){
      $ctrl.showSpinner = false;
    });
    cancellers.push(cancel);

    cancel = $rootScope.$on('$stateChangeError', //listen for an error to stop, thi sis cancelers function
    function(event, toState, toParams, fromState, fromParams, error){
      $ctrl.showSpinner = false;
    });
    cancellers.push(cancel);
  };

  $ctrl.$onDestroy = function () { //when this scop eis destroyed
    cancellers.forEach(function (item) { //for each member of array
      item(); //call the item in the list, which cancels the event
    });
  };

};

})();
