angular.module('zhuce',['ngCookies'])
.controller("zhuce",["$scope","$http","server","$state",function ($scope,$http,server,$state){
      $scope.zhuce=function(){
         $http({
           url:server,
           method:"post",
           data:$scope.updata
         }).success(function(e){
         	debugger
          $state.go('denglu')
         	
         })

      }
  }])
