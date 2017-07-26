var laundryRoom="Basement";
var mailRoom="Room 1A";
function myApartment(){
	var mailBoxNumber=3;
	laundryRoom="In-unit";
	console.log("Mail box: "+mailBoxNumber+", Laundry: "+laundryRoom);
}
console.log("Laundry: "+laundryRoom+", Mail: "+mailRoom);
myApartment();