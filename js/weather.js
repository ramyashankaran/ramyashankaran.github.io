/* js code for weather app

googlemaps reverse geocoding api key:AIzaSyBwqx3fLTyoChHzB4cyUQOENVEkEcsJCsY */
var x = document.getElementById("demo");
var pos = {
	latitude:0,
	longitude:0
};

function getLocation() {
    if (navigator.geolocation)
     {
    
       navigator.geolocation.getCurrentPosition(showPosition);       
     } 
     else { 
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
       $.getJSON(requestURL, null, handleData);

}
// function will load appropriate image depending on the temperature
function handleData(responseData) {

   var tempInFarenheight = (responseData["main"]["temp"] *9)/5  - 459.67;
      if(tempInFarenheight <= 45 )
      {
      
         $("body").css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: $(window).height() + 'px',
        background: 'url(../images/snowcity.jpg) no-repeat center'
        });
      //	$("body").css("background-image","url(../images/snow2.jpg)");
      }
      document.getElementById("weatherText").innerHTML= "Temperature:"+ tempInFarenheight;
    
     
 }
 /*
 function locationData(){
 	
 	  
      var getLocationURL = "https://maps.googleapis.com/maps/api/geocode/json?latlng="  +
                         pos["latitude"] +
                         "," +
                         pos["longitude"]  +     
                         "&key=AIzaSyBwqx3fLTyoChHzB4cyUQOENVEkEcsJCsY"; 
  
     	
                         
      $.getJSON(getLocationURL,null, function(respData){
     // document.getElementById("locationText").innerHTML = respData["results"]["address_components"][2]["long_name"];
      });
                         
     
 }*/