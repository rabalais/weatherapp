$(document).ready(function(){

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=New York&units=imperial&appid=ad0b6203c995478faefc4d58318768ca", function(data, status){
      console.log("Data: " + data + "Status: " + status);
      formatData(data);
    });

    $("#location-search-box").click(function(){

    });

    $("#search-button").submit(function(event){
        getWeatherInfo(event)
    });
});


function getWeatherInfo(event) {
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
  })
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
  $("#wtemp").text("Temp: "+city_temp);
  $("#wfeels").text("Feels like: "+city_feels);
  $("#whigh").text("High: "+city_temp_max);
  $("#wlow").text("Low: "+city_temp_min);
  $("#wspeed").text("Speed: "+city_wind_speed);
  $("#wdeg").text("Degrees: "+city_wind_deg);
  $("#wpressure").text("Pressure: "+city_pressure);
  $("#whumidity").text("Humidity: "+city_humidity);
}