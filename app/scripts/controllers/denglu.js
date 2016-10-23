angular.module('denglu',['ngCookies'])
.controller("denglu",["$scope","$http","server","$cookieStore","$location","$timeout",function ($scope,$http,server,$cookieStore,$location,$timeout) {
      $scope.denglu=function(){
      	$http({
           url:server+"/login",
           method:"POST",
           data:$scope.updata
         }).success(function(e){
           debugger
         })

      }
  }])
