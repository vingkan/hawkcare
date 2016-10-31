firebase.database().ref('patients').on('value', function(snapshot){
	var patients = snapshot.val();
	var toRender = [];
	for(var p in patients){
		if(patients[p]){
			var patient = patients[p];
			toRender.push({
				'Image': patient.image,
				'Name': patient.name,
				'Age': patient.age,
				'Last Visit': moment(patient.last_visit).format('MM/DD/YY'),
				'Daily Exercise': patient.lifestyle.daily_exercise + ' mins',
				'Vegetarian': patient.lifestyle.vegetarian ? 'Yes' : 'No'
			});
		}
	}
	renderTable(toRender);
});