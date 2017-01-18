(function(){
	"use strict";

	angular.module('ngClassifieds').
	controller('classifiedsCtrl', function($scope,$state,classifiedsFactory,$mdSidenav,$mdToast,$mdDialog){
		var vm = this;
		vm.classified={};
		vm.classifieds=[];
		vm.categories=[];

		vm.classifieds = classifiedsFactory.ref;
		vm.classifieds.$loaded().then(function(classifieds){
			vm.categories = getCategories(classifieds);
		});

		$scope.$on('newClassified', function(event, classified){
			vm.classifieds.$add(classified);
			showToast("Classified Saved!");
		});

		$scope.$on('editClassified', function(event, message){
			showToast(message);
		});

		vm.openSideBar = function(){
			$state.go('classifieds.new');
		};

		function showToast(msg){
			$mdToast.show(
				$mdToast.simple()
				.content(msg)
				.position('top right')
				.hideDelay(3000)
			);
		}

		function getCategories(classifieds){
			angular.forEach(classifieds, function(item){
				angular.forEach(item.categories, function(category){
					vm.categories.push(category);
				});
			});
			return _.uniq(vm.categories);
		}

	});

})();
