/* js code for weather app */
var x = document.getElementById("demo");
var pos = {
	latitude:0,
	longitude:0
};

function getLocation() {
    if (navigator.geolocation) {
 
       navigator.geolocation.getCurrentPosition(showPosition);
      
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
       pos["latitude"] = position.coords.latitude;   
        pos["longitude"] = position.coords.longitude;
        
      x.innerHTML = "Latitude: " + pos["latitude"] + 
          "<br>Longitude: " + position.coords.longitude;
      var requestURL = "http://api.openweathermap.org/data/2.5/weather?lat="  +
                         pos["latitude"] +
                         "&lon=" +
                         pos["longitude"]  +     
                         "&appid=c437da5c2e3ca02811cdc357dd1c6767"; 
         // AJAX call to get the weather for this location             
       $.getJSON(requestURL,null,function(responseData) {
     document.getElementById("weathertext").innerHTML= "humidity:"+ responseData["main"]["temp"];
     });

}
