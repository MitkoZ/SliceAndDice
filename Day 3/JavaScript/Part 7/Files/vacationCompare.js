var vacationSpots=["America", "Russia","Poland"];
for (var i = vacationSpots.length-1; i >=0; i--) {
	console.log("I would love to visit "+vacationSpots[i]);
}/*this is the vacation.js file part (didn't find vacation.js)*/

var myPlaces=["America", "Russia","Poland"];
var friendPlaces=["Australia","America","China"];
for (var i = 0; i < myPlaces.length; i++) {
	for (var j = 0; j < friendPlaces.length; j++) {
				if (myPlaces[i]===friendPlaces[j]) {
					console.log(myPlaces[i]);
				}
			}		
}/*this is the actual vacationCompare.js code*/