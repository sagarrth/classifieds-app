(function(){

	"use strict";

	angular.module('ngClassifieds').
	factory("classifiedsFactory", function($firebaseArray){

		var ref = new Firebase('https://ngdirectory.firebaseio.com');

		return {

			ref: $firebaseArray(ref)

		};
	});

})();
