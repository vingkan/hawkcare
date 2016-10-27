var Generator = {

	generateUser: function(callbackFn){
		var callback = callbackFn || console.log.bind(console);
		$.ajax({
			url: 'https://randomuser.me/api/',
			dataType: 'json',
			success: function(data){
				callback(data);
			}
		});
	},

	generateUserPromise: function(){
		var _this = this;
		var promise = new Promise(function(resolve, reject){
			_this.generateUser(resolve);
		});
		return promise;
	},

	continuousUser: function(callback, timeInterval){
		var gen = this;
		var interval = timeInterval || 3000;
		var stop = setInterval(function(){
			gen.generateUser(callback);
		}, interval);
		return stop;
	}
	
}

String.toTitleCase = function(string){
	return string[0].toUpperCase() + string.substr(1);
}