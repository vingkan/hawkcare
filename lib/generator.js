var Generator = {

	generateUser: function(callbackFn){
		var callback = callbackFn || console.log.bind(console);
		$.ajax({
			url: 'https://randomuser.me/api/?nat=US',
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

window.RESTORE = {"-KVOcWxx2RsqDvOdwAI8":{"age":19,"image":"https://randomuser.me/api/portraits/men/47.jpg","last_visit":"2016-02-19T04:38:20Z","lifestyle":{"daily_exercise":103,"vegetarian":false},"name":"James Kelly"},"-KVOcWyFiqEMr6A0W0O1":{"age":74,"image":"https://randomuser.me/api/portraits/women/74.jpg","last_visit":"2016-08-16T21:40:49Z","lifestyle":{"daily_exercise":75,"vegetarian":false},"name":"Ashley Watkins"},"-KVOcWyLZ7LZmBb6YU46":{"age":83,"image":"https://randomuser.me/api/portraits/men/17.jpg","last_visit":"2016-02-23T01:46:34Z","lifestyle":{"daily_exercise":68,"vegetarian":false},"name":"Alberto Matthews"},"-KVOcWyP6MdqWAPdYIpa":{"age":53,"image":"https://randomuser.me/api/portraits/women/24.jpg","last_visit":"2016-08-19T06:41:59Z","lifestyle":{"daily_exercise":23,"vegetarian":true},"name":"Peggy Lynch"},"-KVOcWyX-L5JoPrlwhyC":{"age":60,"image":"https://randomuser.me/api/portraits/men/68.jpg","last_visit":"2016-02-16T08:24:08Z","lifestyle":{"daily_exercise":107,"vegetarian":true},"name":"Bradley Arnold"},"-KVOcWykQu38QFdddZa3":{"age":84,"image":"https://randomuser.me/api/portraits/men/86.jpg","last_visit":"2016-06-17T16:52:25Z","lifestyle":{"daily_exercise":37,"vegetarian":true},"name":"Christian Sims"},"-KVOcWyxMHFpMHA7emyg":{"age":72,"image":"https://randomuser.me/api/portraits/men/75.jpg","last_visit":"2016-06-06T14:41:33Z","lifestyle":{"daily_exercise":111,"vegetarian":false},"name":"Austin Russell"},"-KVOcWz6mAe4NRmBErOs":{"age":61,"image":"https://randomuser.me/api/portraits/women/94.jpg","last_visit":"2016-08-06T07:28:19Z","lifestyle":{"daily_exercise":91,"vegetarian":true},"name":"Mattie Owens"},"-KVOcWz_gKTphDVVGUxu":{"age":59,"image":"https://randomuser.me/api/portraits/women/26.jpg","last_visit":"2016-01-07T22:41:53Z","lifestyle":{"daily_exercise":15,"vegetarian":false},"name":"Margie Rice"},"-KVOcWzvmjPl6HliORNI":{"age":46,"image":"https://randomuser.me/api/portraits/men/23.jpg","last_visit":"2016-07-28T10:45:33Z","lifestyle":{"daily_exercise":106,"vegetarian":true},"name":"Clifton Lawrence"},"-KVOcX-33sbqwOOh8_sX":{"age":28,"image":"https://randomuser.me/api/portraits/women/87.jpg","last_visit":"2016-09-25T16:37:41Z","lifestyle":{"daily_exercise":21,"vegetarian":false},"name":"Peyton Richardson"},"-KVOcX-Cr4m_V1AuAQ16":{"age":59,"image":"https://randomuser.me/api/portraits/men/36.jpg","last_visit":"2016-05-01T04:53:09Z","lifestyle":{"daily_exercise":100,"vegetarian":true},"name":"Luis Evans"},"-KVOcX-HbFCRIOlEOEK1":{"age":35,"image":"https://randomuser.me/api/portraits/men/33.jpg","last_visit":"2016-06-08T15:40:21Z","lifestyle":{"daily_exercise":110,"vegetarian":true},"name":"Brad Lucas"},"-KVOcX-MGP6G289D2aNB":{"age":72,"image":"https://randomuser.me/api/portraits/women/31.jpg","last_visit":"2015-11-27T15:00:34Z","lifestyle":{"daily_exercise":25,"vegetarian":true},"name":"Dawn Fowler"},"-KVOcX-TirtB1u8Nx7U_":{"age":23,"image":"https://randomuser.me/api/portraits/women/7.jpg","last_visit":"2016-05-11T22:08:53Z","lifestyle":{"daily_exercise":69,"vegetarian":true},"name":"Sarah Baker"},"-KVOcX-ZAWEYzWBmjDcT":{"age":33,"image":"https://randomuser.me/api/portraits/women/63.jpg","last_visit":"2016-05-13T07:31:52Z","lifestyle":{"daily_exercise":20,"vegetarian":false},"name":"Lauren Fernandez"},"-KVOcX-eOKzJozxgirKf":{"age":71,"image":"https://randomuser.me/api/portraits/men/73.jpg","last_visit":"2016-02-18T23:39:28Z","lifestyle":{"daily_exercise":32,"vegetarian":true},"name":"Roberto Wagner"},"-KVOcX-noL9-VM85AxTJ":{"age":23,"image":"https://randomuser.me/api/portraits/men/29.jpg","last_visit":"2015-11-09T09:19:44Z","lifestyle":{"daily_exercise":79,"vegetarian":true},"name":"James Jensen"},"-KVOcX-rsiFv32CCBxu7":{"age":46,"image":"https://randomuser.me/api/portraits/women/58.jpg","last_visit":"2016-05-10T23:03:19Z","lifestyle":{"daily_exercise":59,"vegetarian":true},"name":"Marilyn Harper"},"-KVOcX0534eNt-pN994x":{"age":32,"image":"https://randomuser.me/api/portraits/women/5.jpg","last_visit":"2015-11-16T01:45:51Z","lifestyle":{"daily_exercise":39,"vegetarian":false},"name":"Shelly Bowman"}};

//

function restoreFirebase(number){
	if(number){
		firebase.database().ref('patients').set({});
		var users = [];
		for(var u in window.RESTORE){
			if(window.RESTORE[u]){
				window.RESTORE[u].key = u;
				users.push(window.RESTORE[u]);
			}
		}
		for(var n = 0; n < number; n++){
			var key = users[n].key;
			delete users[n].key;
			firebase.database().ref('patients/' + key).set(users[n]);
		}
	}
	else{
		firebase.database().ref('patients').set({});
		firebase.database().ref('patients').set(window.RESTORE);
	}
}

// Shhhhh...

/*window.PATIENTS = [{
    "id": 1,
    "age": 19,
    "last_visit": "2016-02-19T04:38:20Z",
    "vegetarian": false,
    "daily_exercise": 103
  }, {
    "id": 2,
    "age": 74,
    "last_visit": "2016-08-16T21:40:49Z",
    "vegetarian": false,
    "daily_exercise": 75
  }, {
    "id": 3,
    "age": 83,
    "last_visit": "2016-02-23T01:46:34Z",
    "vegetarian": false,
    "daily_exercise": 68
  }, {
    "id": 4,
    "age": 53,
    "last_visit": "2016-08-19T06:41:59Z",
    "vegetarian": true,
    "daily_exercise": 23
  }, {
    "id": 5,
    "age": 60,
    "last_visit": "2016-02-16T08:24:08Z",
    "vegetarian": true,
    "daily_exercise": 107
  }, {
    "id": 6,
    "age": 84,
    "last_visit": "2016-06-17T16:52:25Z",
    "vegetarian": true,
    "daily_exercise": 37
  }, {
    "id": 7,
    "age": 72,
    "last_visit": "2016-06-06T14:41:33Z",
    "vegetarian": false,
    "daily_exercise": 111
  }, {
    "id": 8,
    "age": 61,
    "last_visit": "2016-08-06T07:28:19Z",
    "vegetarian": true,
    "daily_exercise": 91
  }, {
    "id": 9,
    "age": 59,
    "last_visit": "2016-01-07T22:41:53Z",
    "vegetarian": false,
    "daily_exercise": 15
  }, {
    "id": 10,
    "age": 46,
    "last_visit": "2016-07-28T10:45:33Z",
    "vegetarian": true,
    "daily_exercise": 106
  }, {
    "id": 11,
    "age": 28,
    "last_visit": "2016-09-25T16:37:41Z",
    "vegetarian": false,
    "daily_exercise": 21
  }, {
    "id": 12,
    "age": 59,
    "last_visit": "2016-05-01T04:53:09Z",
    "vegetarian": true,
    "daily_exercise": 100
  }, {
    "id": 13,
    "age": 35,
    "last_visit": "2016-06-08T15:40:21Z",
    "vegetarian": true,
    "daily_exercise": 110
  }, {
    "id": 14,
    "age": 72,
    "last_visit": "2015-11-27T15:00:34Z",
    "vegetarian": true,
    "daily_exercise": 25
  }, {
    "id": 15,
    "age": 23,
    "last_visit": "2016-05-11T22:08:53Z",
    "vegetarian": true,
    "daily_exercise": 69
  }, {
    "id": 16,
    "age": 33,
    "last_visit": "2016-05-13T07:31:52Z",
    "vegetarian": false,
    "daily_exercise": 20
  }, {
    "id": 17,
    "age": 71,
    "last_visit": "2016-02-18T23:39:28Z",
    "vegetarian": true,
    "daily_exercise": 32
  }, {
    "id": 18,
    "age": 23,
    "last_visit": "2015-11-09T09:19:44Z",
    "vegetarian": true,
    "daily_exercise": 79
  }, {
    "id": 19,
    "age": 46,
    "last_visit": "2016-05-10T23:03:19Z",
    "vegetarian": true,
    "daily_exercise": 59
  }, {
    "id": 20,
    "age": 32,
    "last_visit": "2015-11-16T01:45:51Z",
    "vegetarian": false,
    "daily_exercise": 39
  }];*/

//

/*var promises = [];
for(var p = 0; p < PATIENTS.length; p++){
  promises.push(Generator.generateUserPromise());
}
Promise.all(promises).then(function(data){

  var userData = data.map(function(obj){
    var userData = obj.results[0];
    userData.seed = obj.info.seed;
    return userData;
  });

  var toRender = [];
  for(var g = 0; g < PATIENTS.length; g++){
    var patient = PATIENTS[g];
    var user = userData[g];
    toRender.push({
      name: String.toTitleCase(user.name.first) + ' ' + String.toTitleCase(user.name.last),
      image: user.picture.large,
      age: patient.age,
      last_visit: patient.last_visit,
      lifestyle: {
        vegetarian: patient.vegetarian,
        daily_exercise: patient.daily_exercise
      }
    });
  }

  renderTable(toRender);

  for(var y = 0; y < toRender.length; y++){
    var patient = toRender[y];
    firebase.database().ref('patients').push(patient);
  }

});*/

/*firebase.database().ref('patients').once('value', function(snapshot){
  var val = snapshot.val();
  var stringified = JSON.stringify(val);
  console.log('JSON Output:', stringified);
});*/

/*restoreFirebase(6);

firebase.database().ref('patients').once('value', function(snapshot){
  var patientMap = {};
  var patients = snapshot.val();
  for(var p in patients){
    if(patients[p]){
      patientMap[p] = patients[p].name;
    }
  }
  var out = JSON.stringify(patientMap);
  console.log(out);
});*/

// "You must've noticed by now how much time Cobb spends doing things he says never to do."