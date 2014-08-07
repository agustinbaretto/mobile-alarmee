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

.controller('AlarmsCtrl', function($scope, $state, alarmsService) {
  $scope.alarms = alarmsService.getAlarms();

  $scope.removeAlarm = function(id) {
    $scope.alarms = alarmsService.removeAlarm(id);
  };
  
  $scope.addAlarm = function() {
    var id = alarmsService.addAlarm();
    $state.go("app.alarm", {'alarmId':id});
  }
})

.controller('AlarmCtrl', function($scope, $ionicModal, $ionicPlatform, $state, $stateParams, alarmsService) {
  $scope.alarms = alarmsService.getAlarms();
  $scope.alarm = _.find($scope.alarms, function(al){ return al.id == $stateParams.alarmId; });
  $scope.geocoder = new google.maps.Geocoder();
  $scope.results = [];
  $scope.currentLatitude = "";
  $scope.currentLongitude = "";
  $scope.watchID = "";

  Number.prototype.toRad = function() { return this * (Math.PI / 180); };
  
  $scope.removeAlarm = function(id) {
    $scope.alarms = alarmsService.removeAlarm(id);
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/confirmAddress.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeConfirmAddress = function() {
    $scope.modal.hide();
  },

  // Open the login modal
  $scope.confirmAddress = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doConfirmAddress = function(index) {
    $scope.alarm.targetLatitude = $scope.results[index].geometry.location.lat();        
    $scope.alarm.targetLongitude = $scope.results[index].geometry.location.lng();
    $scope.alarm.targetAddress = $scope.results[index].formatted_address.substring(0, 100);
    $scope.getCurrentPosition();
    $scope.modal.hide();
  };

  $scope.getTargetPosition = function() {
    $scope.geocoder.geocode( {'address': $scope.alarm.targetAddress, 'region': 'ar'}, function(results, status) {
      $scope.$apply(function(){
        if (status == google.maps.GeocoderStatus.OK) {
          if(results.length > 0){
            if(results.length > 1){
              $scope.results = results;
            }
            $scope.alarm.targetLatitude = results[0].geometry.location.lat();        
            $scope.alarm.targetLongitude = results[0].geometry.location.lng();
            $scope.alarm.targetAddress = results[0].formatted_address.substring(0, 100);
            $scope.getCurrentPosition();
          }
        } else {
     	   alert('Geocode was not successful for the following reason: ' + status);
        }
      });
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
    $scope.watchID = navigator.geolocation.watchPosition($scope.onSuccess, $scope.onError, { timeout: 30000 });
  }
    
  $scope.getDistance = function()
  {        
    var lat1 = $scope.currentLatitude;
   	var lat2 = $scope.alarm.targetLatitude;
   	var lon1 = $scope.currentLongitude;
   	var lon2 = $scope.alarm.targetLongitude;
   	
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lon2-lon1).toRad();
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
   
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
           Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var distance = R * c;
    
    if(distance < $scope.alarm.ratio){
      alert("cercaaaa!");
      //navigator.notification.vibrate(2500);
      //navigator.notification.beep(2);
    }else{
      alert("not yet");
      //navigator.notification.vibrate(2500);
    }
  }
})