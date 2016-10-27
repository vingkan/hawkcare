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
			'image': user.picture.large,
			'name': String.toTitleCase(user.name.first) + ' ' + String.toTitleCase(user.name.last),
			'drug_company': patient.drug_company,
			'diagnosis': patient.diagnosis
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