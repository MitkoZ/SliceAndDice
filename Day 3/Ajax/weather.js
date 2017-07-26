function main() {
	var root = 'http://api.openweathermap.org/data/2.5/weather?id=725993&APPID=1b1217d7ef5faded269afb77ce4b6e9e';
	$.ajax({
		url: root,
		method: 'GET'
	}).then(function(data) {
		console.log(data);
		displayData(data);
	});
	
}

function displayData(data) {
	var tr=$("<tr>");
	tr.append("<td>" + data.weather[0].description + "</td>");
	tr.append("<td>" + Math.floor((data.main.temp-273.15)) +"°C"+ "</td>");
	tr.append("<td>" + data.main.humidity+"%"+ "</td>");
	tr.append("<td>" + data.main.pressure+"hPa"+ "</td>");
	tr.append("<td>" + data.wind.speed+"meter/sec"+ "</td>");
	tr.append("<td>" + new Date(data.sys.sunrise*1000)+ "</td>");
	tr.append("<td>" + new Date(data.sys.sunset*1000)+ "</td>");
	tr.append("</tr>");
	$("table").append(tr);
	
}

$(document).ready(main);