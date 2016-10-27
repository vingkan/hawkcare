firebase.database().ref('patients').on('value', function(snapshot){
	var patients = snapshot.val();
	var toRender = [];
	for(var p in patients){
		if(patients[p]){
			var patient = patients[p];
			toRender.push({
				'Image': patient.image,
				'Name': patient.name,
				'Diagnosis': patient.diagnosis
			});
		}
	}
	renderTable(toRender);
});