"use strict";

angular
  .module("myApp.view1", ["ngTable", "ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "pages/home/home.html",
        controller: "View1Ctrl",
      });
    },
  ])

  .controller("View1Ctrl", [
    "$scope",
    "$http",
    function ($scope, $http) {
      $scope.tableColumns = ["name", "age"];

      $scope.passengerList = [];

      $scope.getPassengers = function () {
        return $http
          .get("https://api.instantwebtools.net/v1/passenger?page=0&size=10")
          .then((res) => {
            $scope.passengerList = res.data.data;
          });
      };
    },
  ]);
