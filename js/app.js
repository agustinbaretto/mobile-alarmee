document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
function onDeviceReady() {
    // Register the event listener
    document.addEventListener("backbutton", onBackKeyDown, false);
}

// Handle the back button
function onBackKeyDown() {
  alert("test");
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

    .state('app.alarm', {
      url: "/alarm",
      views: {
        'menuContent' :{
          templateUrl: "templates/alarm.html",
          controller: 'AlarmsCtrl'
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/alarm');
});

