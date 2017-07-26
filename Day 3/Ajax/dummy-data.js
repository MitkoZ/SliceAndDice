function main() {
	$("#fetch").click(function(){
		var root = 'http://jsonplaceholder.typicode.com';

		$.ajax({
			url: root + '/users/',
			method: 'GET'
		}).then(function(data) {
			displayData(data);
		});
	});
}

function displayData(data) {
	for (var i = 0; i < data.length; i++) {
		var tr=$("<tr>");
		tr.append("<td>" + data[i].id + "</td>");
		tr.append("<td>" + data[i].name + "</td>");
		tr.append("<td>" + data[i].username+ "</td>");
		tr.append("<td>" + data[i].email+ "</td>");
		tr.append("<td>" + data[i].address.street+ "</td>");
		tr.append("<td>" + data[i].address.suite+ "</td>");
		tr.append("<td>" + data[i].address.city+ "</td>");
		tr.append("<td>" + data[i].address.zipcode+ "</td>");
		tr.append("<td>" + data[i].address.geo.lat+ "</td>");
		tr.append("<td>" + data[i].address.geo.lng+ "</td>");
		tr.append("<td>" + data[i].phone+ "</td>");
		tr.append("<td>" + data[i].website+ "</td>");
		tr.append("<td>" + data[i].company.name+ "</td>");
		tr.append("<td>" + data[i].company.catchPhrase+ "</td>");
		tr.append("<td>" + data[i].company.bs+ "</td>");
		tr.append("</tr>");
		$("table").append(tr);
	}
}
$(document).ready(main);