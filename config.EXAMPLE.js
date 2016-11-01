angular.module('test', ['ng-drift'])
	.config(['ngDriftProvider',
		function(ngDriftProvider){
			ngDriftProvider.setKey('your_drift_key');
			ngDriftProvider.setSnippetVersion('choosen_snippet_version');
		}])