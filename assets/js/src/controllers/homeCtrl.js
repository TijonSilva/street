angular.module("street").controller("homeCtrl", ["$scope", "mapService", "placeService",
  function($scope, mapService, placeService){

  $scope.loading = false;
  $scope.places = [];
  $scope.lat = null;
  $scope.lng = null;

  $scope.search = function(address){

    $scope.loading = true;
    $scope.places = [];
    $scope.lat = null;
    $scope.lng = null;

    mapService.searchAddress(address, function(data){
      if(data.length > 0){
        $scope.lat = data[0].geometry.location.lat;
        $scope.lng = data[0].geometry.location.lng;

        $scope.getPlaces($scope.lat, $scope.lng);

      }
      else{
        $scope.loading = false;
      }
    });
  }

  $scope.getPlaces = function(lat, lng){
    placeService.places(lat, lng, function(data){
      $scope.places = data;
      angular.forEach(data, function(i, e){
        placeService.detail(i.place_id, function(det){
          i.detail = det;
          $scope.loading = false;
          $scope.$apply();
        });
      });
    });
  }
}]);
