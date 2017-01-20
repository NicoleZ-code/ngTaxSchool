/**
 * 在线测评
 */

/*在线测评首页*/
var onlineListModule = angular.module("OnlineListModule",[]);
onlineListModule.controller("onlineListCtrl",function($scope, $http, $state, $stateParams){
	$scope.text1 = '收起搜索';
	$scope.text2 = '展开搜索';
	$scope.text = $scope.text1;
	$scope.isShow = true;
	$scope.searchShow = function(){
		$scope.isShow = !$scope.isShow;
		if($scope.isShow == false){
			$scope.text = $scope.text2;
		}else{
			$scope.text = $scope.text1;
		}
	}

	$http.get("../angular/data/onlineListData.json")
	.success(function(data){   
		$scope.datas = data;
	});
})
/*测评页*/
.controller("onlineListDetailCtrl",function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/onlineQuestionData.json")
	.success(function(data){   
		$scope.datas = data;
	});
})
/*答案页*/
.controller("onlineListKeyCtrl",function($scope, $http, $state, $stateParams){
	$http.get("../angular/data/onlineQuestionData.json")
	.success(function(data){   
		$scope.datas = data;
	});
})
