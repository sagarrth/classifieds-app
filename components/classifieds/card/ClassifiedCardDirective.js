(function(){

	"use strict";

	angular
		.module('ngClassifieds')
		.directive('classifiedCard', function(){
	   		return {
	   			templateUrl: "components/classifieds/card/ClassifiedCardTpl.html",
	   			scope: {
   					classifieds: "=classifieds",
   					searchQuery: "=searchQuery",
   					category: "=category"
	   			},
	   			controller: classifiedsCardCtrl,
	   			controllerAs: "vm"
	   		};

	   		function classifiedsCardCtrl($state, $mdDialog, $mdToast, $scope, classifiedsFactory){

	   			var vm = this;
	   			vm.classifieds = classifiedsFactory.ref;

	   			vm.editClassified = function(classified){
					$state.go('classifieds.edit', {
						id: classified.$id,
					});
				};


				vm.deleteClassified = function(event, classified){
					var confirm = $mdDialog.confirm()
					.title('Are you sure you want to delete '+classified.title+'?')
					.ok('Yes')
					.cancel('No')
					.targetEvent(event);

					$mdDialog.show(confirm).then(function(){
						console.log(classified);
						vm.classifieds.$remove(classified);
						showToast('Classified deleted!');
					}, function(){

					});
				};

				function showToast(msg){
					$mdToast.show(
						$mdToast.simple()
							.content(msg)
							.position('top right')
							.hideDelay(3000)
					);
				}

   			}

		});

})();
