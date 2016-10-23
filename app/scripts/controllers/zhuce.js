angular.module('zhuce',['ngCookies'])
.controller("zhuce",["$scope","$http","server","$cookieStore","$location","$timeout",function ($scope,$http,server,$cookieStore,$location,$timeout) {
      $scope.zhuce=function(){
         
         $http({
           url:server,
           method:"post",
           data:$scope.updata
         }).success(function(e){
//          $cookieStore.put("zndata", {
//          name: $scope.updata.username,
//          id: $scope.updata.id
//						})

            
            debugger
            
         })

      }
  }])
