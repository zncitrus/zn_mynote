'use strict';

/**
 * @ngdoc overview
 * @name somenoteApp
 * @description
 * # somenoteApp
 *
 * Main module of the application.
 */
angular
  .module('somenoteApp', ['ngCookies','ui.router','zhuce','denglu'])
  .constant('server','http://www.somenote.cn:1510/users')
  .controller("app",["$scope","$http",function ($scope,$http) {
      
  }]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
  	$stateProvider
	.state("denglu",{
		url:"/denglu",
		templateUrl:"views/denglu.html",
      	controller:"denglu"
	})
    .state("zhuce",{
		url:"/zhuce",
		templateUrl:"views/zhuce.html",
      	controller:"zhuce"
	})
    .state("ind",{
		url:"/ind",
		templateUrl:"views/ind.html"
    })
   
  	$urlRouterProvider.when('','/denglu');
  }])
