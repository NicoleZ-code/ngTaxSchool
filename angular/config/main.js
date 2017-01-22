require.config({
	baseUrl:'./',
	paths:{ //bind-once
		'jquery':'libs/jquery-1.7.2.min',
        'TweenMax':'libs/TweenMax.min',
        'kinMaxShow':'libs/jquery.kinMaxShow-1.1.min',
		'angular':'libs/angular-1.3.0.14/angular',
        'angular-ui':'libs/angular-ui-router',
		'angular-momentjs':'libs/angular-momentjs-master/angular-momentjs',
		'moment':"libs/moment",
		'app':'js/app',
		'utils-service':'js/utils/utils-service',
		'utils-directive':'js/utils/utils-directive',
		'home.controller':'js/controller/home.controller',
		'course.controller':'js/controller/course.controller',
		'video.controller':'js/controller/video.controller',
		'courseware.controller':'js/controller/courseware.controller',
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
		'angular-momentjs':{deps:['angular']},
		'app': {deps:['angular','angular-ui']},
		'utils-directive': {deps:['angular','angular-ui']},
		'utils-service': {deps:['angular','angular-ui']},
		'home.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'course.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'video.controller': {deps:['angular','angular-ui','utils-directive','utils-service','course.controller']},
		'courseware.controller': {deps:['angular','angular-ui','utils-directive','utils-service','course.controller']},
		'interactive.controller': {deps:['angular','angular-ui','utils-directive','utils-service']},
		'onlineList.controller': {deps:['angular','angular-ui','utils-directive','utils-service']}
	}
});


require([
	    'jquery',
		'moment',
        'angular',
		'angular-momentjs',
        'angular-ui',
		'app',
		'utils-service',
		'utils-directive',
		'home.controller',
		'course.controller',
		'video.controller',
		'courseware.controller',
		'interactive.controller',
		'onlineList.controller',
		'TweenMax',
		'kinMaxShow'
		 ],
   function(jquery,moment,angular,$moment){
	   //手动启动ng-app	   
	   angular.bootstrap(document, ['routerApp']);
	//    moment().format();
   });