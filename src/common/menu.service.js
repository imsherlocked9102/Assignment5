(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user = {};

  service.saveUser = function(user) {
    service.user = angular.copy(user);
    console.log(service.user);
  }

  service.getUser = function() {
    return service.user;
  }

  service.getCategories = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteDish = function(short_name) {
    return $http.get(ApiPath + '/menu_items/' + short_name + '/menu_items/' + 0 + '.json');
  }
  
}



})();
