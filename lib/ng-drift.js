angular.module('ng-drift', []);

angular.module('ng-drift')
	.provider('ngDrift',
		function(){
			var initialized = false;
			this.setKey = function(drift_key){
				this.drift_key = drift_key;
			}

			this.setSnippetVersion = function(version){
				this.snippet_version = version;
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
				console.log('mi chiamano');
				return this;
			}
		}
	)