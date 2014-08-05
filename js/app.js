document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, true);
}

function onBackKeyDown(e) {
  alert("Cerrando la app no se avisara la proximidad al destino.");
}

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    //https://github.com/ftlabs/fastclick
    //FastClick.attach(document.body);
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.alarms', {
      url: "/alarms",
      views: {
        'menuContent' :{
          templateUrl: "templates/alarms.html",
          controller: 'AlarmsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/alarms/:alarmId",
      views: {
        'menuContent' :{
          templateUrl: "templates/alarm.html",
          controller: 'AlarmsCtrl'
        }
      }
    })
    
    .state('app.alarm', {
      url: "/alarms/new",
      views: {
        'menuContent' :{
          templateUrl: "templates/alarm.html",
          controller: 'AlarmsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/alarms');
});

