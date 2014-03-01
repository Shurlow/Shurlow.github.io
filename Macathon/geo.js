var initialLocation;
var map;

function initialize() {
        var mapOptions = {
        	center: new google.maps.LatLng(-34,150),
        	zoom: 8,
        	mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     

function getLocation() {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showMap);
		console.log('got here')
	}
}

function showMap(position){
	initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
	
	}

google.maps.event.addDomListener(window, 'load', initialize);
console.log(initialLocation);
map.setCenter(initialLocation);
marker.setMap(map);
}