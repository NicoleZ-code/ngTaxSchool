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

    //格式化字符串
    $scope.intFormat = function (_int) {
        if (_int < 9) {
            return "0" + (_int + 1);
        } else {
            return (_int + 1);
        }
    }

})
    .controller('searchCourseCtl', function ($scope, $http, $state, $stateParams, searchService,$moment) {
        $scope.isList = true;
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseEntity.json')
            .success(function (data) {
                $scope.list = data;
            })         
       
        $scope.timeFormat = function (item){
            return item.teaching_time = "2016-10-10"//$moment(item.teaching_time);
        };
        // $scope.timeFormat = searchService.timeFormat(item,"teaching_time"); //error
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



