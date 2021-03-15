// variable declarations
let search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  cityName = document.getElementById("cityName"),
  condition = document.getElementById("condition");

// button that initiates main function
// call back #1
submit.addEventListener("click", getDressed);

function getDressed(e) {
  e.preventDefault();
  let city = search.value;

  // header for fetch request
  var myHeaders = new Headers();
  myHeaders.append(
    "x-rapidapi-key",
    "865cddfcedmsh3d5ef6811e51047p164b80jsnf7e801f179b0"
  );
  myHeaders.append(
    "x-rapidapi-host",
    "community-open-weather-map.p.rapidapi.com"
  );
  myHeaders.append("865cddfcedmsh3d5ef6811e51047p164b80jsnf7e801f179b0", "");
  myHeaders.append(
    "Cookie",
    "__cfduid=d77f085310e7aa2820930c04becd91c2b1615746732"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  // fetch request
  fetch(
    `https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial&mode=xml%2C%20html`,
    requestOptions
  )
    // parsing response into json format
    .then((response) => response.json())

    // using response for evil
    .then((result) => {
      // outputs the name of the city searched
      cityName.innerHTML = result.name;


  
      // outputs weather condition; code not used.
      // condition.innerHTML = result.weather[0].main;

      // outputs the temperature
      temp.innerHTML = result.main.temp;

    
      // callback #2
      // converts farenheit to celsius
    function toCelsius(result){
        let celsiusNum = (result - 32) * 5/9;
        return celsiusNum; 
    }
    let tempc = toCelsius(result.main.temp);
    document.getElementById("celsius").innerHTML=tempc;
    

    
      // testing for return outputs
      console.log(result);
      console.log(result.weather[0].main);
      console.log(result.main.temp);
      console.log(result.name);

      // dog clothing if/else statements
      if (result.weather[0].main == "Rain") {
        document.getElementById("clothes").src = "/weather/images/raincoat.jpg";
        document.getElementById("shoes").src = "/weather/images/rainboots.jpg";
        document.getElementById("access").src = "/weather/images/umbrella.jpg";
        condition.innerHTML = "Rainy";
      } else if (result.weather[0].main !== "Rain" && result.main.temp >= 80) {
        document.getElementById("clothes").src = "/weather/images/tank.jpg";
        document.getElementById("shoes").src = "/weather/images/jordans.jpg";
        document.getElementById("access").src = "/weather/images/sunglass.jpg";
        condition.innerHTML = "Not Rainy";
      } else if (result.weather[0].main !== "Rain" && result.main.temp <= 60) {
        document.getElementById("clothes").src = "/weather/images/sweater.jpg";
        document.getElementById("shoes").src = "/weather/images/jordans.jpg";
        document.getElementById("access").src = "/weather/images/sunglass.jpg";
        condition.innerHTML = "Not Rainy";
      } else {
        document.getElementById("clothes").src = "/weather/images/button.jpg";
        document.getElementById("shoes").src = "/weather/images/jordans.jpg";
        document.getElementById("access").src = "/weather/images/sunglass.jpg";
        condition.innerHTML = "Not Rainy";
      }
      // clears search bar input
      document.getElementById("search").value = "";
    })
    // if fetch request fails, this shows the error
    .catch((error) => console.log("error", error));
}

// call back #3
// greeting prompt
function greeting(greet) {
  alert('Hello ' + greet);
}

function processUserInput(callback) {
  var greet = prompt('Please enter your name.');
  callback(greet);
}

processUserInput(greeting);


// call back #4
// clock
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}


// call back #5
// delayed have a great day message
setTimeout(myFunctions, 5000);

function myFunctions() {
  document.getElementById("day").innerHTML = "HAVE A GREAT DAY!";
}


// fetch result format
// {
//     "coord": {
//         "lon": -95.3633,
//         "lat": 29.7633
//     },
//     "weather": [
//         {
//             "id": 500,
//             "main": "Rain",
//             "description": "light rain",
//             "icon": "10d"
//         },
//         {
//             "id": 741,
//             "main": "Fog",
//             "description": "fog",
//             "icon": "50d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 69.28,
//         "feels_like": 68.77,
//         "temp_min": 68,
//         "temp_max": 71.01,
//         "pressure": 1013,
//         "humidity": 100
//     },
//     "visibility": 805,
//     "wind": {
//         "speed": 13.8,
//         "deg": 170,
//         "gust": 24.16
//     },
//     "rain": {
//         "1h": 0.51
//     },
//     "clouds": {
//         "all": 90
//     },
//     "dt": 1615750303,
//     "sys": {
//         "type": 1,
//         "id": 4850,
//         "country": "US",
//         "sunrise": 1615725129,
//         "sunset": 1615768145
//     },
//     "timtemp": -18000,
//     "id": 4699066,
//     "name": "Houston",
//     "cod": 200
// }
