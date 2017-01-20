require.config({
	baseUrl:'./',
	paths:{ //bind-once
		'jquery':'libs/jquery-1.7.2.min',
        'TweenMax':'libs/TweenMax.min',
        'kinMaxShow':'libs/jquery.kinMaxShow-1.1.min',
		'angular':'libs/angular-1.3.0.14/angular',
        'angular-ui':'libs/angular-ui-router',
		'app':'js/app',
		'utils-service':'js/utils/utils-service',
		'utils-directive':'js/utils/utils-directive',
		'home.controller':'js/controller/home.controller',
		'course.controller':'js/controller/course.controller',
		'interactive.controller':'js/controller/interactive.controller',
		'onlineList.controller':'js/controller/onlineList.controller'
	},
	waitSeconds: 0,
	packages:[
		// {name:'app',main:'',location:'js/'}
	],
	shim:{//定义依赖关系
		'jquery' : {'exports' : 'jquery'},
		'TweenMax' : {deps:['jquery']},
		'kinMaxShow' : {deps:['jquery']},
		'angular' : {'exports' : 'angular'},
		'angular-ui': {deps:['angular']},
		'app': {deps:['angular','angular-ui']},
		'utils-directive': {deps:['angular','angular-ui']},
		'utils-service': {deps:['angular','angular-ui']},
		'home.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'course.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'interactive.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'onlineList.controller': {deps:['angular','angular-ui','utils-directive','utils-service']}
	}
});


require([
	    'jquery',
        'angular',
        'angular-ui',
		'app',
		'utils-service',
		'utils-directive',
		'home.controller',
		'course.controller',
		'interactive.controller',
		'onlineList.controller',
		'TweenMax',
		'kinMaxShow'
		 ],
   function(jquery,angular){
	   //手动启动ng-app
	   angular.bootstrap(document, ['routerApp']);
   });