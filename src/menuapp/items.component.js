(function () {
'use strict';
//components don't use menudataservice to get data, that information is passed into the component using the 
//one way binding '<'
angular.module('Data')
.component('items', {
  bindings: {
    items: '<' //resolve in routes will be used to bind to this
  }
});

})();
