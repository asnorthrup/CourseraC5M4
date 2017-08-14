(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService', 'categories']; //inject service and the categories component
function CategoriesController(MenuDataService, categories) { //inject the service and categories on the controller
  var categoryList = this;
  categoryList.categories = categories;
}

})();
