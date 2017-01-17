/**
 * 互动专区
 */

/*互动专区首页*/
var interactiveModule = angular.module("InteractiveModule",[]);
interactiveModule.controller("interactiveCtrl", function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/interactiveData.json")
	.success(function(data){   //data中的type:a,b,c,d分别代表最新公告，最新问题，专题交流，最热问题
		$scope.datas = data;
	});
})
