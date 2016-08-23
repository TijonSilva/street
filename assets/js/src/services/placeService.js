angular.module('street').service('placeService',['$http', 'config',  function($http, config){
  var container = document.getElementById('results');
  var service = new google.maps.places.PlacesService(container);


  this.places = function(lat, lng, success){
      var request = {
        location: new google.maps.LatLng(lat,lng),
        radius: '50',
        types: ['store','establishment', 'lodging', 'parking']
      };
      service.nearbySearch(request, function(results, status){
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          success.call(this, results);
        }
      });
  }

  this.detail = function (placeId, success){
    var request = { placeId: placeId};
    service.getDetails(request, function(place, status){
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        success.call(this, place);
      }
    });
  }

}]);
