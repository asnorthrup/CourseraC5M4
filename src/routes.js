
(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories list page
  .state('menuCategories', {
    url: '/menu-categories',
    templateUrl: 'src/menuapp/templates/menu-categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
          .then(function(categories){
            console.log(categories.data);
            return categories.data;
          });
      }]
    }
  })


  //todo
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menuapp/templates/item.template.html',
    controller: "ItemsController as categoryItems",
    resolve: {
      items: ['MenuDataService','$stateParams', function (MenuDataService,$stateParams) {
        return MenuDataService.getItemsForCategory($stateParams.categoryId)
          .then(function(items){
            console.log(items.data);
            return items.data.menu_items;
          });
      }]
    }
  });

}

})();
