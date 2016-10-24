angular.module('denglu',['ngCookies'])
.controller("denglu",["$scope","$http","server","$cookieStore","$cookies","$state",function ($scope,$http,server,$cookieStore,$cookies,$state) {
      if($cookies.get('usernam',$scope.updata)){
				$state.go('ind')
			}
		$scope.denglu=function(){
      	$http({
           url:server+"/login",
           method:"POST",
           data:$scope.updata
         }).success(function(e){
         	$state.go('ind')
					if($scope.abc==true){
						$cookieStore.put("usernam",$scope.updata);				
						var expireDate = new Date();
						expireDate.setDate(expireDate.getDate() + 6);
						$cookies.put('usernam', $scope.updata, {'expires': expireDate});
					}
						debugger
         })

      }
  }])
