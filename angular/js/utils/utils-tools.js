'use strict';
/**
 * 封装 通用组件
*/
angular.module('tools', ['angular-momentjs'])
   //格式化num字符串
  .filter('initFormat', function () {

    return function(_int){
      if (_int < 9) {
        return "0" + (_int + 1);
      } else {
        return (_int + 1);
      }
    }
   

  })
   //格式化日期
  .filter('dateFormat', function ($moment) {
      // console.log($moment)
    return function(date){
        date = new Date(date);
        date = date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日 " 
        return date;
    }
  })
//   .filter('dateFormat', ['$moment', function($moment) {
//     return function(value, format) {
//       if (typeof value === 'undefined' || value === null) {
//         return '';
//       }

//       if (!isNaN(parseFloat(value)) && isFinite(value)) {
//         // Milliseconds since the epoch
//         value = new Date(parseInt(value, 10));
//       }

//       // else assume the given value is already a date
//       if ($moment.then) {
//         $moment().then(function(moment) {
//           return moment(value).format(format);
//         });
//       } else {
//         return $moment(value).format(format);
//       }

//     };
// }])
//     .controller('SyncCtrl', function($scope, $moment) {
//       // If didn't set asyncLoading angular-momentjs will assume you provided the moment.js
//       $scope.time = $moment("20111031", "YYYYMMDD").fromNow();
//     });