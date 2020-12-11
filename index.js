


let city;
let background;
let cityTag;
let currentTemp;
let tempRange ;
let sunImage ;
let fore1;
let fore2;
let fore3;  
let fore4;  
let fore5;

let forecast1logo;
let forecast2logo;
let forecast3logo; 
let forecast4logo;
let forecast5logo;
let forecastLogos;
let forecastLogosCity2;

let foreDate1;
let foreDate2;
let foreDate3;
let foreDate4;
let foreDate5;



//default city
 window.onload = () => {

    //get temp location in HTML
    background = document.querySelector(".citybackground");
    cityTag = document.querySelector(".city-name");
    currentTemp = document.querySelector(".current-temp");
    tempRange = document.querySelector(".temp-range");
    sunImage = document.querySelector("#current-icon");


   
    // get forecast logo location inHTML
    forecast1logo = document.querySelector("#current-icon-day1");
    forecast2logo = document.querySelector("#current-icon-day2");
    forecast3logo = document.querySelector("#current-icon-day3"); 
    forecast4logo = document.querySelector("#current-icon-day4");
    forecast5logo = document.querySelector("#current-icon-day5");

    forecastLogos = [
        forecast1logo,
        forecast2logo,
        forecast3logo,
        forecast4logo,
        forecast5logo,
    ];

    //TODO: use defer 

    forecastLogosCity2 =[
        document.querySelector("#current-icon-day1-2"), 
        document.querySelector("#current-icon-day2-2"), 
        document.querySelector("#current-icon-day3-2"), 
        document.querySelector("#current-icon-day4-2"), 
        document.querySelector("#current-icon-day5-2"), 
    ];

    // get forecast date location inHTML
    foreDate1 = document.querySelector(".date1");
    foreDate2 = document.querySelector(".date2");
    foreDate3 = document.querySelector(".date3");
    foreDate4 = document.querySelector(".date4");
    foreDate5 = document.querySelector(".date5");
    //get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp");
    fore2 =  document.querySelector(".date2-temp");   
    fore3 =  document.querySelector(".date3-temp");   
    fore4 =  document.querySelector(".date4-temp");   
    fore5 =  document.querySelector(".date5-temp");



    //call function with default city
    getWeather("london");
    backgroundImage("london");

    

};

//first city search btn
document.querySelector("#submit").addEventListener("click", (e) => {

    e.preventDefault();

    city = document.querySelector("input").value;

    //curretn temp location in HTML
    background = document.querySelector(".citybackground");
    cityTag = document.querySelector(".city-name");
    currentTemp = document.querySelector(".current-temp");
    tempRange = document.querySelector(".temp-range");
    sunImage = document.querySelector("#current-icon");
    //get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp");
    fore2 =  document.querySelector(".date2-temp");   
    fore3 =  document.querySelector(".date3-temp");   
    fore4 =  document.querySelector(".date4-temp");   
    fore5 =  document.querySelector(".date5-temp");

    // get forecast date location inHTML
    foreDate1 = document.querySelector(".date1");
    foreDate2 = document.querySelector(".date2");
    foreDate3 = document.querySelector(".date3");
    foreDate4 = document.querySelector(".date4");
    foreDate5 = document.querySelector(".date5");

    getWeather(city, 1);
    backgroundImage(city);

});

//second city search btn
document.querySelector("#submit2").addEventListener("click", (e) => {

    e.preventDefault();

    city = document.querySelector("#city-input2").value;

    //city2 - get current temp location in HTML
    background = document.querySelector(".citybackground2");
    cityTag = document.querySelector(".city-name2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-range2");
    sunImage = document.querySelector("#current-icon2");
    //city 2 - get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp-2");
    fore2 =  document.querySelector(".date2-temp-2");   
    fore3 =  document.querySelector(".date3-temp-2");   
    fore4 =  document.querySelector(".date4-temp-2");   
    fore5 =  document.querySelector(".date5-temp-2");

    // city 2 - get forecast date location in HTML
    foreDate1 = document.querySelector(".date1-2");
    foreDate2 = document.querySelector(".date2-2");
    foreDate3 = document.querySelector(".date3-2");
    foreDate4 = document.querySelector(".date4-2");
    foreDate5 = document.querySelector(".date5-2");



    getWeather(city, 2);
    backgroundImage(city);
});


//plus city btn 
document.querySelector("#plus").addEventListener("click", (e) => {

    e.preventDefault();
    //display the 2nd city container and hide plus button
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container2").style.display = "grid";
    document.querySelector("#plus").style.display = "none";
    
    //city2 - get current temp location in HTML
    background = document.querySelector(".citybackground2");
    cityTag = document.querySelector(".city-name2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-range2");
    sunImage = document.querySelector("#current-icon2");
    //city 2 - get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp-2");
    fore2 =  document.querySelector(".date2-temp-2");   
    fore3 =  document.querySelector(".date3-temp-2");   
    fore4 =  document.querySelector(".date4-temp-2");   
    fore5 =  document.querySelector(".date5-temp-2");

    // city 2 - get forecast date location in HTML
    foreDate1 = document.querySelector(".date1-2");
    foreDate2 = document.querySelector(".date2-2");
    foreDate3 = document.querySelector(".date3-2");
    foreDate4 = document.querySelector(".date4-2");
    foreDate5 = document.querySelector(".date5-2");

    //call function with default city
    getWeather("hong kong");
    backgroundImage("HONG KONG");

});

// delete city btn
document.querySelector("#delete").addEventListener("click", (e) => {

    e.preventDefault();

    //hide city2 container and display plus btn
    document.querySelector(".container2").style.display = "none";
    document.querySelector("#plus").style.display = "initial";
   
});

getWeather = (city, cityNumber) => {

    const key = "da9a51208d5e4403a9053883caf4d08d";

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
    .then((repsonse) => repsonse.json())
    .then((data) => {

        // console.log(data)

        displayToday(data, cityNumber);
        forecast(data, cityNumber);
    })
}

backgroundImage = (city) => {

    const key = "1AtTqASnS-chw9VgN_btgruDd8sdggmuUpUwbk5RAJM";

    fetch("https://api.unsplash.com/search/photos?query=" + city + "&client_id=" + key + "&per_page=1")
    .then((response)=> response.json())
    .then((data) => {
        
        //grab the url from json 
        let backgroundUrl = data.results[0].urls.small;
        //change background image url
        background.style.backgroundImage = "url('"+backgroundUrl +"')";
    })
}

displayToday = (data) => {

    //get current temperature
    let temp = Math.round(data.data[0].temp);
    let highestTemp = Math.round(data.data[0].max_temp); 
    let lowestTemp = Math.round(data.data[0].min_temp); 

   //get current weather discription
   let description = data.data[0].weather.description;

   //innerHTML display
   cityTag.innerHTML = `<h3>${data.city_name}</h3>
                           <h4>${description}</h4>`;
   currentTemp.innerHTML = `<p> ${temp}°</p>`;
   tempRange.innerHTML = `<p><i class="fas fa-caret-up"></i> ${highestTemp}°c   
                          <i class="fas fa-caret-down"></i> ${lowestTemp}°c</p>`;

   //show related img according to weather discription 
   if(temp < "1"){
       sunImage.src = "v2img/cold.png";
   } else if(description.includes("clouds")){
       sunImage.src = "v2img/clouds.png";
   } else if(description.includes("Thunderstorm")){
       sunImage.src = "v2img/lightning.png";
   }  else if(description.includes("rain")){
       sunImage.src = "v2img/rain.png";
   }  else if(description.includes("sun")){
       sunImage.src = "v2img/sun.png";
   }   else if(description.includes("snow")){
       sunImage.src = "v2img/snowflake.png";
   }   else if(description.includes("Clear")){
       sunImage.src = "v2img/sun.png";
   }   else {
       sunImage.src = "v2img/rainbow.png";   
   }   
}

forecast = (data, cityNumber) => {

    //get forecast temp from json file
    let forecast1 = Math.round(data.data[1].temp);
    let forecast2 = Math.round(data.data[2].temp);
    let forecast3 = Math.round(data.data[3].temp);
    let forecast4 = Math.round(data.data[4].temp);
    let forecast5 = Math.round(data.data[5].temp);


    // //display forecast temp in HTML
    fore1.innerHTML = forecast1+"°";
    fore2.innerHTML = forecast2+"°";   
    fore3.innerHTML = forecast3+"°";   
    fore4.innerHTML = forecast4+"°";   
    fore5.innerHTML = forecast5+"°";

    //display forecast date in HTML
    foreDate1.innerHTML = data.data[1].datetime;
    foreDate2.innerHTML = data.data[2].datetime;
    foreDate3.innerHTML = data.data[3].datetime;
    foreDate4.innerHTML = data.data[4].datetime;
    foreDate5.innerHTML = data.data[5].datetime;
 
    //get forecast description from json file
    let forecast1descritpion = data.data[1].weather.description;
    let forecast2descritpion = data.data[2].weather.description;
    let forecast3descritpion = data.data[3].weather.description;
    let forecast4descritpion = data.data[4].weather.description;
    let forecast5descritpion = data.data[5].weather.description;
    let forecastDescriptions = [
        forecast1descritpion,
        forecast2descritpion,
        forecast3descritpion,
        forecast4descritpion,
        forecast5descritpion
    ];


    //function to put weathericon accordingly
    forecastIcon = (forecastDescription, logo) => {
        if(forecastDescription.includes("clouds")){
            logo.src = "v2img/clouds.png";
        } else if(forecastDescription.includes("Thunderstorm")){
            logo.src = "v2img/lightning.png";
        }  else if(forecastDescription.includes("rain")){
            logo.src = "v2img/rain.png";
        }  else if(forecastDescription.includes("sun")){
            logo.src = "v2img/sun.png";
        }   else if(forecastDescription.includes("snow")){
            logo.src = "v2img/snowflake.png";
        }   else if(forecastDescription.includes("Clear")){
            logo.src = "v2img/sun.png";
        }   else {
            logo.src = "v2img/rainbow.png";   
        }  
    }

    for (let i=0; i < forecastLogos.length; i++) {
    
        if(cityNumber == 1){
            forecastIcon(forecastDescriptions[i], forecastLogos[i]);
        } else if(cityNumber == 2){
            forecastIcon(forecastDescriptions[i], forecastLogosCity2[i]);
        };

    };  
}





 