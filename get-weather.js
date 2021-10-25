$(document).ready(function(){

    $.get("api.openweathermap.org/data/2.5/weather?q=New York&appid=ad0b6203c995478faefc4d58318768ca", function(data, status){
      console.log("Data: " + data + "Status: " + status);
      updateWeather(data);
    });

    $("#search-button").click(function(){
      var searchInput = $("#location-search-box").val();

    });

    $("#location-search-box").clcik(function(){

    });
});

function updateWeather(data) {
  
}

function getWeatherInfo() {

}

