angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('AlarmsCtrl', function($scope) {
  $scope.alarmData = {};
  $scope.alarms = [];
  $scope.alerts = [];
  $scope.geocoder = new google.maps.Geocoder();
  $scope.currentLatitude = "";
  $scope.currentLongitude = "";
  $scope.targetLatitude = "";
  $scope.targetLongitude = "";
  $scope.watchID = "";
  
  Number.prototype.toRad = function() { return this * (Math.PI / 180); };
  
  $scope.getTargetPosition = function() {
    $scope.geocoder.geocode( {'address': $scope.alarmData.targetAddress}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {	
        $scope.targetLatitude = results[0].geometry.location.lat();        
        $scope.targetLongitude = results[0].geometry.location.lng();
        
        $scope.getCurrentPosition();
      } else {
   	   alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
    
  $scope.onSuccess = function(position) {
   $scope.currentLatitude = position.coords.latitude;
     $scope.currentLongitude = position.coords.longitude;
     $scope.getDistance();
   }
   
  $scope.onError = function(error) {
    alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
  }
    
  $scope.getCurrentPosition = function() {
    $scope.watchID = navigator.geolocation.watchPosition($scope.onSuccess, $scope.onError, { timeout: 10000 });
  }
    
  $scope.getDistance = function()
  {        
    var lat1 = $scope.currentLatitude;
   	var lat2 = $scope.targetLatitude;
   	var lon1 = $scope.currentLongitude;
   	var lon2 = $scope.targetLongitude;
   	
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
   
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
           Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var distance = R * c;
    
    if(distance < $scope.alarmData.ratio){
      alert("cercaaaa!");
      //navigator.notification.vibrate(2500);
      //navigator.notification.beep(2);
    }else{
      alert("not yet");
      //navigator.notification.vibrate(2500);
    }
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
