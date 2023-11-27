console.log("Hello, please have a nice thanksgiving")

const getWeather = async (cityName) => {
    
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=75280aadccd8f95129d52447556f4786`)

    console.log(response)
    console.log(response.data)
    return response.data
}


const createList = ( id, main, description, icon) => {
    const html = `<div id=${id} class="card mt-3 mb-3" style="width: 18rem;">
    <li class="list-group-item">${main}</li>
    <li class="list-group-item">${description}</li>    
    <li class="list-group-item">${icon}</li> 
   

  </ul>
</div>`
    document.querySelector('.weather-list').insertAdjacentHTML('beforeend', html)
}

const loadData = async (event) => {
    event.preventDefault()
    let queryCity = document.querySelector("#city_name").value
    const rangers = await getWeather(queryCity)
    console.log(rangers)
    createList(rangers.weather[0].description, rangers.main.feels_like, rangers.wind.speed, rangers.sys.sunset) 
    
}

const clearData = () => {
    document.querySelector('.weather-list').innerHTML = '';
}



