function renderTable(rows){
	var html = ''
	//Headers
	var headers = ['Image', 'Name'];
	for(var i = 0; i < rows.length; i++){
		if(rows[i]){
			for(var j in rows[i]){
				if(headers.indexOf(j) < 0){
					headers.push(j);
				}
			}
		}
	}
	html += '<tr>'
	for(var h = 0; h < headers.length; h++){
		if(headers[h] === 'Image'){
			html += '<th><div class="dashboard-cell"></div></th>'
		}
		else{
			html += '<th><div class="dashboard-cell">' + headers[h] + '</div></th>'
		}
	}
	html += '</tr>'
	//Rows
	for(var r = 0; r < rows.length; r++){
		var entry = rows[r];
		html += '<tr>'
		for(var v = 0; v < headers.length; v++){
			if(headers[v] === 'Image'){
				html += '<td><div class="dashboard-image" style="background-image: url(&#39;' + (entry[headers[v]] || 'style/img/default-user-image.jpg') + '&#39;);"></div></td>'
			}
			else{
				html += '<td><div class="dashboard-cell">' + (entry[headers[v]] || '---') + '</div></td>'
			}
		}
		html += '</tr>'
	}
	var output = document.getElementById('dashboard');
	output.innerHTML = html;
}