

(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);

//$q is an asynchronous service that runs functions and returns when done processing
MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  // Returns a promise, NOT items array directly for all the categories on the menu
  service.getAllCategories = function () {
    //the http service is a function which takes a single arugment (a configuration object - which generates an http request) and returns a promise
    //response object has data, status, headers, config, status
    var promise =  $http.get("https://davids-restaurant.herokuapp.com/categories.json");
    console.log(promise);
    return promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var builtURL =  "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
    return $http.get(builtURL);
  };


}

})();
