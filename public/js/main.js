const cityName  = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const temp_real_val =document.getElementById('temp_real_val')
const temp_status =document.getElementById('temp_status')

const getInfo = async (event) =>{
    event.preventDefault()
    let cityVal = cityName.value;
    if(cityVal === ''){
        city_name.innerText = `please write the name of the city`;
    }else{
        try {
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=792e4604e771e2546e86458e74909d47` 
            const response =await fetch(url);
            const data =await response.json()
            const arrData = [data]
            city_name.innerText = `${arrData[0].name}. ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp
            const tempMood = arrData[0].weather[0].main

            if(tempMood === 'Clear'){
                temp_status.innerHTML =" <i class='fas fa-sun' style='color:#eccc68;' ></i>"
            }else if(tempMood === 'Clouds'){
                temp_status.innerHTML =" <i class='fas fa-cloud' style='color:#f1f2f6;' ></i>"
            }else if(tempMood === 'Rain'){
                temp_status.innerHTML =" <i class='fas fa-rain' style='color:#a4b0be;' ></i>"
            }else{
                temp_status.innerHTML =" <i class='fas fa-sun' style='color:#eccc68;' ></i>"
            }

        } catch (error) {
            city_name.innerText = `please enter the name properly`;
            
        }
       
    }
}
submitBtn.addEventListener('click',getInfo)