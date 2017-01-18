(function(){

	"use strict";

	angular.module('ngClassifieds')
		.controller('classifiedsEditCtrl', function($scope, $mdSidenav, $timeout, $state, $mdDialog, classifiedsFactory){
			var vm = this;
			vm.closeSidebar = closeSidebar;
			vm.saveEditClassified = saveEditClassified;
			vm.classifieds = classifiedsFactory.ref;
			vm.classified = vm.classifieds.$getRecord($state.params.id);

			$timeout(function(){
				$mdSidenav('left').open();	
			});

			$scope.$watch('vm.sidenavOpen', function(sidenav){
				if(sidenav===false){
					$mdSidenav('left')
						.close()
						.then(function(){
							$state.go('classifieds');
						});
				}
			});

			function closeSidebar(){
				vm.sidenavOpen = false;
			};
			
			function saveEditClassified(){
				vm.classifieds.$save(vm.classified).then(function(){
					$scope.$emit('editClassified', "Edit Saved!!");
					closeSidebar();
				})
			};

		});

})();