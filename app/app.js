"use strict";

angular
  .module("myApp", [
    "ngTable",
    "ngRoute",
    "myApp.view1",
    "myApp.view2",
    "myApp.version",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");
      $routeProvider.otherwise({ redirectTo: "/view1" });
    },
  ]);
