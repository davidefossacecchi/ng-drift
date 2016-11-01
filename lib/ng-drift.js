angular.module('ng-drift', []);

angular.module('ng-drift')
	.provider('ngDrift',
		function(){
			var initialized = false;
			var self = this;
			this.api = undefined;
			var actions = {
				hide: function(){
					self.api.widget.hide()
				},
				show: function(){
					self.api.widget.show()
				},
				open: function(){
					self.api.sidebar.open();
				},
				close: function(){
					self.api.sidebar.close();
				},
				toggle: function(){
					self.api.sidebar.toggle();
				},
				goToNewConversation: function(){
					self.api.goToNewConversation();
				},
				showWelcomeMessage: function(params){
					self.api.showWelcomeMessage(params);
				},
				hideWelcomeMessage: function(){
					self.api.hideWelcomeMessage();
				}
			}

			this.hide = function(){
				performAction('hide');
			}

			this.show = function(){
				performAction('show');
			}

			this.open = function(){
				performAction('open');
			}

			this.close = function(){
				performAction('close');
			}

			this.toggle = function(){
				performAction('toggle');
			}

			this.goToNewConversation = function(){
				performAction('goToNewConversation');
			}

			this.showWelcomeMessage = function(params){
				performAction('showWelcomeMessage', params);
			}

			this.hideWelcomeMessage = function(){
				performAction('hideWelcomeMessage' );
			}

			this.setKey = function(drift_key){
				this.drift_key = drift_key;
			}

			this.setSnippetVersion = function(version){
				this.snippet_version = version;
			}

			function performAction(action, params){
				if(self.api === undefined)				
					drift.on('ready',
						function(api){ 
					 		self.api = api;
					 		actions[action](params);
						}
					)
				else actions[action](params);
			}

			this.init = function(){
				initialized = true;
				!function() {
				  	var t;
				  	if (t = window.driftt = window.drift = window.driftt || [], !t.init) return t.invoked ? void (window.console && console.error && console.error("Drift snippet included twice.")) : (t.invoked = !0, 
				  	t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
				  	t.factory = function(e) {
				    	return function() {
				      		var n;
				      		return n = Array.prototype.slice.call(arguments), n.unshift(e), t.push(n), t;
				    	};
				  	},
				  	t.methods
				  		.forEach(
				  			function(e) {
				    			t[e] = t.factory(e);
				  			}
				  		),
				  		t.load = function(t) {
				    		var e = 3e5;
				    		var i = Math.ceil(new Date() / e) * e;
				    		var o = document.createElement("script");
				    		o.type = "text/javascript";
				    		o.async = !0;
				    		o.crossorigin = "anonymous";
				    		o.src = "https://js.driftt.com/include/" + i + "/" + t + ".js"; 
				    		n = document.getElementsByTagName("script")[0];
				    		n.parentNode.insertBefore(o, n);
				  		}
				  	);
				}();
				drift.SNIPPET_VERSION = this.snippet_version;
				drift.load(this.drift_key);
			}

			this.$get = function(){
				if(!initialized)
					this.init();
				return this;
			}
		}
	)