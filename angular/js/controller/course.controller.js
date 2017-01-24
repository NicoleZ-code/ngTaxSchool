'use strict'
/**
 * 实体课程列表
 */
// Full stack trace
    // Error.stackTraceLimit = Infinity;

courseMoudle.controller('courseEntityListCtl', function ($scope, $http, $state, $stateParams, searchService) {
    
    $scope.list = searchService.init();
    // console.log(searchService.init(),$scope.list) //多一个length
    searchService.getAllItems('data/courseEntity.json')
        .success(function (data) {
            $scope.list = data;
        })
})
    .controller('searchCourseCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.isList = true;
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseEntity.json')
            .success(function (data) {
                $scope.list = data;
            })                
    })
    .controller('courseDetailCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.courseware = {};
        $scope.item = {};
        searchService.getAllItems('data/courseEntity.json')
            .success(function (data) {
               for(var i = 0 ; i < data.length ; i++ ){
                    if(data[i].course_id==$stateParams.courseId){
                        $scope.item = data[i];
                        break;
                    }
                }
                
            });
        
        getcourseware($stateParams.courseId);    

        function getcourseware(courseId){
            searchService.getAllItems('data/courseware.json')
                .success(function (data) {
                    for(var i = 0 ; i < data.length ; i++ ){
                        if(data[i].course_id==$stateParams.courseId){
                            console.log(data[i])
                            $scope.courseware = data[i];
                            break;
                        }
                    }
                    
                });
        }

    })



