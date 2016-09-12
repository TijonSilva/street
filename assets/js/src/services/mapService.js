angular.module('street').service('mapService',['$http', 'config',  function($http, config){

  this.searchAddress = function(address, success){
    var url = config.mapsApi + '?address='+address;
    $http.get(url).success(function(data){
      if(data.status === "OK"){
        success.call(this, data.results);
      }
    });
  };

}]);
