<h2>ngDrift: an Angular 1.x Wrapper Service for Drift Chat JS APIs</h2>

This is a module that act as a wrapper for the [Drift](https://www.drift.com/) Live Chat JS APIs

<h3>Installation</h3>
1. Download the zip and properly link the lib/ng-drift.js file in your code
2. Add 'ng-drift' as a dependency of your app
`angular.module('yourApp', ['ng-drift']);`
3. Configure the provider properly with your key and your snippet version
`angular.module('yourApp')
	.config(['ngDriftProvider',
		function(ngDriftProvider){
			ngDriftProvider.setKey('t2r46sixm3tp');
			ngDriftProvider.setSnippetVersion('0.3.1');
		}]);`
4. Bootstrap Drift injecting it in your module run function
`angular.module('yourApp')
	.run(
		['ngDrift',
		function(ngDrift){
			//do stuff
		}
	)`
5. Inject Drift as dependency wherever you want to call the APIs
`angular.module('yourApp')
	.controller('yourController',
		['$scope', 'ngDrift',
		function($scope, ngDrift){
			//do stuff
		}
	)`

<h3>Methods</h3>
Refering to the [Widget API](http://help.drift.com/developer-docs/widget-api) and [Javascript SDK](http://help.drift.com/developer-docs/javascript-sdk) pages, the available methods are.
* hide: hides the widget from the page (no arguments)
* show: shows the widget on the page (no arguments)
* open: opens the sidebar (no arguments)
* close: close the sidebar (no arguments)
* toggle: toggle the sidebar (no arguments)
* goToNewConversation: (no arguments)
* showWelcomeMessage: shows the welcome message. It accepts an optional parameter that is an object to configure the welcome message
`{ 
  showAvatar:false,// if true, selects an agent's avatar based on your sites settings.
  slide:false,// if true, uses a slide animation. if false uses the default fade animation. 
  message:undefined,// a string. replaces the default welcome message with a custom one. 
  avatarUrl:undefined,// a url. replaces the default avatar with a custom one. 
}`
* hideWelcomeMessage: (no arguments)
* identify: identify the user in your chat. It accepts 2 parameters: the first is a unique ID, the second is an object that describes the user
`{
	email: 'the email of the user',
	name: 'the fullname of the user',
	companyId: 'a company ID in your systems, string or numeric',
	tags: 'a string or an array of string',
	startDate: 'a millisenconds numeric timestamp o a ISO*8601 date string',
	revenue: 'a numeric value of the revenue the user is generating'
}`

* reset: reset all the user info, usefull when he logs out (no arguments)
* track: sends an event to Drift, it accepts two parameters, the first is the name of the event, the second is an object with event data.
* page: sends the page name to Drift, it accepts a string
* debug: enable or disable debug.

<h3>Events Handling</h3>
The service has also a method for event handling that accepts an object where properties are the events names and the values are the calbacks. Yes, you have ti use an object even if the evnt you want to handle is just one. Drift supports three events:
* message
* sidebarClose
* sidebarOpen
You can look at the official [docs](http://help.drift.com/developer-docs/widget-api) for more details