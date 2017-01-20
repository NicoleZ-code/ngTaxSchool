'use strict'
/**
 * 实体课程列表
 */

courseMoudle.controller('courseEntityListCtl', function ($scope, $http, $state, $stateParams, searchService) {
    $scope.list = searchService.init();
    // console.log(searchService.init(),$scope.list) //多一个length
    searchService.getAllItems('data/courseEntity.json')
        .success(function (data) {
            $scope.list = data;
        })

    //格式化字符串
    $scope._intFormat = function (_int) {
        if (_int < 9) {
            return "0" + (_int + 1);
        } else {
            return (_int + 1);
        }
    }

})
    .controller('searchCourseCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseEntity.json')
            .success(function (data) {
                $scope.list = data;
            })
    })

    /**
     * 视频教程
     */
    .controller('videoListCtl', function ($scope, $http, $state, $stateParams, searchService) {
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
    /**
     * 课件相关下载
     */
    .controller('coursewareSearchCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.isList = true;
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseware.json')
            .success(function (data) {
                $scope.list = data;
            })
    })
    .controller('coursewareListCtl', function ($scope, $http, $state, $stateParams, searchService) {
        $scope.list = searchService.init();
        searchService.getAllItems('data/courseware.json')
            .success(function (data) {
                $scope.list = data;
            })
    })
