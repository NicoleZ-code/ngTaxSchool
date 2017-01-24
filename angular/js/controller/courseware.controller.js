
/**
 * 课件相关下载
 */
courseMoudle.controller('coursewareSearchCtl', function ($scope, $http, $state, $stateParams, searchService) {
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