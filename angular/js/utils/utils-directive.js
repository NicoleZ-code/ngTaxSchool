'use strict';
/**
 * 封装 通用组件
*/
angular.module('utils',[])

.directive('', ['', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    };
}])

/**
 * tab -right 选项卡
 */
.directive('tabs',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 树菜单
 */
.directive('tabs',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 搜索项查询 search-options
 */

/**
 * 搜索菜单
 */
.directive('search',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 实体课程-列表展示 
 */
.directive('course-grid',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])

/**
 * 视频课程-列表展示 
 */
.directive('video-grid',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])
/**
 * 测验考试 
 */

.directive('exame',['',function(){
    return {
        restrict:'AE',
        replace:true,
        template:'',
        link: function($scope, iElm, iAttrs, controller) {
            
        }
    }
}])
