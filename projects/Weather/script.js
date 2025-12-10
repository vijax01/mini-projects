const title = document.firstElementChild.firstChild.childNodes[5];
const name = document.getElementById('name');
const img = document.getElementById('image');
const date = document.getElementById('date');
const time = document.getElementById('time');
const cloudiness = document.getElementById('cloudiness');
const desc = document.getElementById('desc');
const visibility = document.getElementById('visibility');
const speed = document.getElementById('speed');
const temp = document.getElementById('temp');
const feels = document.getElementById('feels');
const maxTemp = document.getElementById('maxTemp');
const minTemp = document.getElementById('minTemp');
const humidity = document.getElementById('humidity');
const pressure = document.getElementById('pressure');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const btn = document.getElementById('submit');


// Temperature conversions (Kelvin to Celsius)
const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);


function unixToTime(timestamp) {
    return new Date(timestamp * 1000).toLocaleTimeString();
}



const settings = {
	async: true,
	crossDomain: true,
	url: 'https://weather-api138.p.rapidapi.com/weather?city_name=Prayagraj',
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'cb5f448795msh8aaa22f9ecf2e16p17b08fjsn0c6ebb62aed3',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
	}
};


async function getCity() {
  try {
    const res = await fetch("https://ipwho.is/");
    const data = await res.json();
    return data.success !== false ? data.city : null;
  } catch {
    return null;
  }
}

// Example usage
getCity().then(city => {
  if (city) {
    console.log("User city:", city);
	document.getElementById('city').value = city;
	btn.click();
  } else {
    console.log("Could not detect city.");
  }
});



btn.addEventListener('click', () => {
	img.classList.remove("d-none");
	img.src = "./assets/loader.gif";
	const city = document.getElementById('city').value;
	settings.url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;

	$.ajax(settings).done(function (response) {
		//setting all the data to the HTML file
		name.innerText = response.name;
		if (response.cod !== 200) {
			img.classList.add("d-none");
			title.innerText = '';
			date.innerText = '';
			time.innerText = '';
			cloudiness.innerText = ''; 
			desc.innerText = '';
			visibility.innerText = '';
			speed.innerText = '';
			temp.innerText = '';
			feels.innerText = '';
			maxTemp.innerText = '';
			minTemp.innerText = '';
			humidity.innerText = '';
			pressure.innerText = '';
			sunrise.innerText = '';
			sunset.innerText = '';
			return;
		} else if (response.cod === 200){
			img.src = `https://openweathermap.org/img/wn/${response.weather[0].icon}.png`;
			img.classList.remove("d-none");
			title.innerText = 'Weather of ' + response.name;
			date.innerText = new Date(response.dt * 1000).toLocaleDateString();
			time.innerText = new Date(response.dt * 1000).toLocaleTimeString();
			cloudiness.innerText = response.clouds.all; 
			desc.innerText = response.weather[0].description[0].toUpperCase() + response.weather[0].description.slice(1);
			visibility.innerText = response.visibility + ' meters';
			speed.innerText = response.wind.speed + ' m/s';
			temp.innerText = kelvinToCelsius(response.main.temp);
			feels.innerText = kelvinToCelsius(response.main.feels_like) + ' °C';
			maxTemp.innerText = kelvinToCelsius(response.main.temp_max) + ' °C';
			minTemp.innerText = kelvinToCelsius(response.main.temp_min) + ' °C';
			humidity.innerText = response.main.humidity;
			pressure.innerText = response.main.pressure + ' hPa';
			sunrise.innerText = unixToTime(response.sys.sunrise);
			sunset.innerText = unixToTime(response.sys.sunset);
		}
	});
});

