angular.module('somenoteApp').controller('ind', ['$scope', '$http', '$state', '$stateParams', '$cookieStore', function($scope, $http, $state, $stateParams, $cookieStore) {
	var num = 0;
	$scope.zid = $stateParams
	//返回
	$scope.back = function() {
		$state.go('ind', {
			uid: $scope.zid.uid
		})
	}
	//查看
	$http({
		url: "http://www.somenote.cn:1510/item",
		method: "get",
		params: {
			"$skip": num,
			"$limit": 10,
			"uid": $scope.zid.uid

		}
	}).success(function(e) {
		$scope.data = e;
		if(e.length < 10) {
			$scope.ten = false
		} else if(e.length >= 10) {
			$scope.ten = true
		}

	})
	
	//添加
	$scope.add = function() {
		$scope.updata.uid = $scope.zid.uid
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "POST",
			data: $scope.updata
		}).success(function(e) {
			$scope.data.push(e)
			$state.go('ind', {
				uid: $scope.zid.uid
			})
		})
	}
	//删除
	$scope.del = function(e) {
		$http({
			url: "http://www.somenote.cn:1510/item/" + e.id,
			method: "delete"
		}).success(function() {
			$scope.data.splice($scope.data.indexOf(e), 1)
		})
	}
	//修改
	$scope.edit = function(e) {
		$scope.editdata = e
		$state.go('edit', {
			id: e.id,
			title: e.title,
			content: e.content,
			uid: e.uid
		})
	}
	$scope.jgr = $stateParams
	$scope.save = function() {
		$scope.jgr.uid = $scope.zid.uid
		$http({
			url: "http://www.somenote.cn:1510/item/" + $scope.jgr.id,
			method: "PUT",
			data: $scope.jgr
		}).success(function(e) {
			$state.go('ind', {
				uid: $scope.zid.uid
			})
		})
	}
	//下一页
	$scope.next = function() {
		$scope.sh = true
		num += 10;
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "GET",
			params: {
				"$skip": num,
				"$limit": 10,
				"uid": $scope.zid.uid
			}
		}).success(function(e) {
			$scope.data = e
			if(e.length < 10) {
				$scope.next = false
			}
		})
	}
	//上一页
	$scope.shang = function() {
		$scope.next = true
		if(num > 10) {
			num -= 10;
		} else {
			num = 0;
			$scope.sh = false
		}
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "GET",
			params: {
				"$skip": num,
				"$limit": 10,
				"uid": $scope.zid.uid
			}
		}).success(function(e) {
			$scope.data = e
		})
	}
	//退出登录
	$scope.exit = function() {
		$http({
			url: "http://www.somenote.cn:1510/item",
			method: "POST",
		}).success(function(e) {
			$cookieStore.remove("usernam", $scope.updata);
			$state.go('denglu')
		})
	}
	
}])