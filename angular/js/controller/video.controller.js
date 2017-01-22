/**
 * 视频教程
 */
courseMoudle.controller('videoListCtl', function ($scope, $http, $state, $stateParams, searchService) {
    $scope.list = searchService.init();
    searchService.getAllItems('data/courseOnline.json')
        .success(function (data) {
            $scope.list = data;
        })
    
})
    .controller('searchVideoCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.isList = true; //list table  格式切换
        $scope.courseType = 'entity'; //课程类型
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseOnline.json')
            .success(function (data) {
                $scope.list = data;
                //模拟数据库的一些数据查询
            })
    })
    .controller('videoDetailCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.isList = true;
        $scope.item = {};
        searchService.getAllItems('data/courseOnline.json')
            .success(function (data) {
                for (var i = 0; i < data.length; i++) {
                    if (data[i].course_id == $stateParams.courseId) {
                        console.log(data[i])
                        $scope.item = data[i];
                        break;
                    }
                }
            })
    })
    /**
     * 视频教程-最热视频
     */
    .controller('videoHotListCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseOnline.json')
            .success(function (data) {
                $scope.list = data;
            })
    })
    /**
     * 视频教程-推荐视频
     */
    .controller('videoReListCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseOnline.json')
            .success(function (data) {
                $scope.list = data;
            })
    })