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

/*互动专区--更多*/
.controller("interactiveMoreCtrl", function($scope, $http, $state, $stateParams){
	
	$scope.toggleList = {current:0};
	$scope.setCurrent = function(param){
        $scope.toggleList.current = param;
	}

	$http.get("../angular/data/interactiveLeftMenu.json")
	.success(function(data){   
		$scope.data1 = data;
	});

	$scope.titleName = "增值税";
	$scope.getData = function(param){
		$scope.titleName = param;
	}

	$http.get("../angular/data/interactiveMore.json")
	.success(function(data){   
		$scope.data2 = data;
	});
})
/*互动专区--新的问题*/
.controller("interactiveQuestionCtrl", function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/interactiveMore.json")
	.success(function(data){   
		$scope.data1 = data;
	});
	$http.get("../angular/data/interactiveQuestion.json")
	.success(function(data){   
		$scope.data2 = data;
	});
})
