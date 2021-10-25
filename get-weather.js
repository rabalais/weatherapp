$(document).ready(function(){

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=New York&appid=ad0b6203c995478faefc4d58318768ca", function(data, status){
      console.log("Data: " + data + "Status: " + status);
    });

    $("#location-search-box").click(function(){

    });
});

function updateWeather(data) {
  
}

function getWeatherInfo() {

}

