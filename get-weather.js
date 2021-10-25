$(document).ready(function(){
    $("#location-search-box").click(function(){

    });

    $("#search-button").click(function(event){
      if (isNaN($("#location-search-box").val()) == false){
        getWeatherInfoByZip(event);
      }
      else {
        getWeatherInfoByCity(event);
      }
    });
});


function getWeatherInfoByCity(event) {
  var request;
  event.preventDefault();

  request = $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather",
      type : "GET",
      data: {
        q: $("#location-search-box").val(),
        appid: "ad0b6203c995478faefc4d58318768ca",
        units: "imperial"
      }
  });

  request.done(function(content){
      formatData(content);
  });
}

function getWeatherInfoByZip(event) {
  var request;
  event.preventDefault();

  request = $.ajax({
      url:"https://api.openweathermap.org/data/2.5/weather",
      type : "GET",
      data: {
        zip: $("#location-search-box").val(),
        appid: "ad0b6203c995478faefc4d58318768ca",
        units: "imperial"
      }
  });

  request.done(function(content){
      formatData(content);
  });
}

function formatData(jsonObj) {
  var city_name = jsonObj.name;
  var city_weather = jsonObj.weather[0].main;
  var city_weather_desc = jsonObj.weather[0].description;
  var city_temp = jsonObj.main.temp;
  var city_feels = jsonObj.main.feels_like;
  var city_temp_min = jsonObj.main.temp_min;
  var city_temp_max = jsonObj.main.temp_max;
  var city_pressure = jsonObj.main.pressure;
  var city_humidity = jsonObj.main.humidity;
  var city_wind_speed = jsonObj.wind.speed;
  var city_wind_deg = jsonObj.wind.deg;

  $("#headercs").text(city_name);
  $("#wmain").text(city_weather);
  $("#wdesc").text(city_weather_desc);
  $("#wtemp").text(city_temp+" °F");
  $("#wfeels").text(city_feels+" °F");
  $("#high-low").text(city_temp_max+"°"+"/"+city_temp_min+"°");
  $("#wspeed").text(city_wind_speed+" mph");
  $("#wpressure").text(city_pressure+" hPa");
  $("#whumidity").text(city_humidity+"%");
}