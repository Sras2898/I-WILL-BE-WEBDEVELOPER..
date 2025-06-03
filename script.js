constbutton = document.getElementById('search-button');
const input = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');

async function getData(cityName)   {
        const promise = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=1b8a10ef3788661163ac6c50013c6ca
&q=${cityName}`

       ) ;
        return await promise.json();
}
button.addEventListener('click', async () => {
    const value = input.value;
    getData result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
}); 