$(document).ready(function(){

    $.getJSON("api.openweathermap.org/data/2.5/weather?q=New&20York&appid=ad0b6203c995478faefc4d58318768ca", function(data, status){
      console.log("Data: " + data + "Status: " + status);
    });

    $("#search-button").click(function(){
      var searchInput = $("#location-search-box").val();

    });

    $("#location-search-box").click(function(){

    });
});

function updateWeather(data) {
  
}

function getWeatherInfo() {

}

