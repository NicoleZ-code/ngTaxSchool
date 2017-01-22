/**
 * 首页
 */

var homeModule = angular.module("HomeModule",[]);
/*最新通知*/
homeModule.controller("homeNewNotice",function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/interactiveData.json")
    .success(function(data) {  //data中的type:a代表最新通知
       $scope.list = data;
    });
})

/*课程推荐*/
.controller("homeCourseRecommend",function($scope, $http, $state, $stateParams){
	$scope.data = {current:1};
	$scope.setCurrent = function(param){
		$scope.data.current = param;
	}
	$http.get("../angular/data/courseEntity.json")//实体课程推荐
	.success(function(data){
		$scope.data1 = data;
	});
	$http.get("../angular/data/courseOnline.json")//网络课程推荐
	.success(function(data){
		$scope.data2 = data;
	});

	$scope.cur = 0;
	$scope.setHover = function(param){
		$scope.cur = param;
	}
})