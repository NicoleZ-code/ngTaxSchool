/**
 * 互动专区
 */

/*互动专区首页*/
var interactiveModule = angular.module("InteractiveModule",[]);
interactiveModule.controller("interactiveCtrl", function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/interactiveData1.json")
	.success(function(data){
		$scope.data1 = data;
	});
	$http.get("../angular/data/interactiveData2.json")
	.success(function(data){
		$scope.data2 = data;
	});
	$http.get("../angular/data/interactiveData3.json")
	.success(function(data){
		$scope.data3 = data;
	});
	$http.get("../angular/data/interactiveData4.json")
	.success(function(data){
		$scope.data4 = data;
	});
})
