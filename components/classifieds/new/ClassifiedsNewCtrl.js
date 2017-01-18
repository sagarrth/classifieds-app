(function(){

	"use strict";

	angular.module('ngClassifieds')
		.controller('classifiedsNewCtrl', function($scope, $mdSidenav, $timeout, $state, $mdDialog, classifiedsFactory){
			var vm = this;

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

			vm.closeSidebar = function(){
				vm.sidenavOpen = false;
			};
			
			vm.saveClassified = function(classified){
				if(classified){
					classified.contact={
						name:"Sagar Routh",
						phone:"02220156358",
						email:"sgrrth@icloud.com"
					};
					$scope.$emit('newClassified', classified);
					vm.closeSidebar;
				}
			}

		});

})();