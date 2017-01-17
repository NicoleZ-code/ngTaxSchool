/**
 * 首页
 */

/*轮播图片*/
var homeModule = angular.module("HomeModule",[]);
homeModule.controller("homeBannerImg", function($scope, $http, $state, $stateParams){
	$scope.src = "public/images/video.png";
})

/*最新通知*/
.controller("homeNewNotice",function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/homeNewNotice.json")
    .success(function(data) {
       $scope.list = data;
    });
})

/*课程推荐*/
.controller("homeCourseRecommend",function($scope, $http, $state, $stateParams){
	$scope.data = {current:1};
	$scope.setCurrent = function(param){
		$scope.data.current = param;
	}
	$http.get("../angular/data/homeData1.json")
	.success(function(data){
		$scope.data1 = data;
	});
	$http.get("../angular/data/homeData2.json")
	.success(function(data){
		$scope.data2 = data;
	});
})