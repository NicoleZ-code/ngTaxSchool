'use strict'
/**
 * 课程列表
 */

courseMoudle.controller('courseCtl',function($scope, $http, $state, $stateParams){

})
 
/**
 * 最新课程
 */
.controller('courseListCtl',function($scope, $http, $state, $stateParams,searchService){
    $scope.isList = true;
    $scope.list =  searchService.init() ;
    // console.log(searchService.init(),$scope.list) //多一个length
    searchService.getAllItems('data/course.json')
         .success(function(data){
             $scope.list = data;
             $scope.list["isShow"] = true;
         })
    
    //格式化字符串
    $scope._intFormat = function (_int){
        if (_int<9) {
            return "0"+(_int+1);
        }else{
            return (_int+1);
        }
    }

})

/**
 * 推荐课程
 */
.controller('recommendCourseCtl',function($scope,$http,$state,$stateParams,searchService){
    $scope.isList = true;
    $scope.list =  searchService.init() ;
    // console.log(searchService.init(),$scope.list) //多一个length
    searchService.getAllItems('data/course.json')
         .success(function(data){
             $scope.list = data;
             $scope.list["isShow"] = true;
         })
})