angular
	.module('ngClassifieds',['ngMaterial', 'ui.router','firebase'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
		
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			.state('classifieds',{
				url:"/classifieds",
				templateUrl:'components/Classifieds/classifiedsTpl.html',
				controller: 'classifiedsCtrl as vm'
			})
			.state('classifieds.new',{
				url:"/new",
				templateUrl:'components/Classifieds/new/ClassifiedsNewTpl.html',
				controller: 'classifiedsNewCtrl as vm'
			})
			.state('classifieds.edit',{
				url:"/edit/:id",
				templateUrl:'components/Classifieds/edit/ClassifiedsEditTpl.html',
				controller: 'classifiedsEditCtrl as vm',
				params:{
					classified: null
				}
			});

		$urlRouterProvider.otherwise("/classifieds");
			
	});


