(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['MenuDataService', 'items']; //inject service and the categories component
function ItemsController(MenuDataService, items) { //inject the service and categories on the controller
  var itemList = this;
  itemList.items = items;
}

})();
