import { backgroundImage } from './backgroundImage.js';
import { displayToday } from './displayToday.js';
import { forecast } from './forecast.js';

'use strict';

let city;
let background;
let cityTag;
let currentTemp;
let tempRange;
let sunImage;

let fore1;
let fore2;
let fore3;  
let fore4;  
let fore5;
let fores;
let foresCity2;

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
let foreDates;
let foreDatesCity2;


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

    // get forecast date location inHTML
    foreDate1 = document.querySelector(".date1");
    foreDate2 = document.querySelector(".date2");
    foreDate3 = document.querySelector(".date3");
    foreDate4 = document.querySelector(".date4");
    foreDate5 = document.querySelector(".date5");
    foreDates = [
        foreDate1,
        foreDate2,
        foreDate3,
        foreDate4,
        foreDate5,
    ];

    //get forecast temp location in HTML
    fore1 =  document.querySelector(".date1-temp");
    fore2 =  document.querySelector(".date2-temp");   
    fore3 =  document.querySelector(".date3-temp");   
    fore4 =  document.querySelector(".date4-temp");   
    fore5 =  document.querySelector(".date5-temp");
    fores = [
        fore1,
        fore2,
        fore3,
        fore4,
        fore5,
    ];

    //call function with default city
    getWeather("london", 1);
    backgroundImage("london", background);

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
   
    getWeather(city, 1);
    backgroundImage(city, background);

});

//plus city btn 
document.querySelector("#plus").addEventListener("click", (e) => {

    e.preventDefault();

    //display the 2nd city container and hide plus button
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container2").style.display = "grid";
    document.querySelector("#plus").style.display = "none";
    
    //city2 - define current temp location in HTML
    background = document.querySelector(".citybackground2");
    cityTag = document.querySelector(".city-name2");
    currentTemp = document.querySelector(".current-temp2");
    tempRange = document.querySelector(".temp-range2");
    sunImage = document.querySelector("#current-icon2");

    //city 2 - define forecast temp location in HTML
    foresCity2 = [
        document.querySelector(".date1-temp-2"),
        document.querySelector(".date2-temp-2"),   
        document.querySelector(".date3-temp-2"),   
        document.querySelector(".date4-temp-2"),   
        document.querySelector(".date5-temp-2"),
    ];
    
    // city 2 - define forecast date location in HTML
    foreDatesCity2 = [
        document.querySelector(".date1-2"),
        document.querySelector(".date2-2"),
        document.querySelector(".date3-2"),
        document.querySelector(".date4-2"),
        document.querySelector(".date5-2"),
    ];

    // city 2 - define logo locations in HTML
    forecastLogosCity2 =[
        document.querySelector("#current-icon-day1-2"), 
        document.querySelector("#current-icon-day2-2"), 
        document.querySelector("#current-icon-day3-2"), 
        document.querySelector("#current-icon-day4-2"), 
        document.querySelector("#current-icon-day5-2"), 
    ];


    //call function with default city
    getWeather("new york", 2);
    backgroundImage("new york", background);

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

    getWeather(city, 2);
    backgroundImage(city, background);

});


// delete city btn
document.querySelector("#delete").addEventListener("click", (e) => {

    e.preventDefault();

    //hide city2 container and display plus btn
    document.querySelector(".container2").style.display = "none";
    document.querySelector("#plus").style.display = "initial";
   
});


const getWeather = (city, cityNumber) => {

    const key = "da9a51208d5e4403a9053883caf4d08d";

    fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city +'&key='+ key)
    .then((repsonse) => repsonse.json())
    .then((data) => {

        // console.log(data)

        displayToday(data, cityNumber, cityTag, currentTemp, tempRange, sunImage);
        forecast(data, cityNumber, foreDates, fores, forecastLogos, foreDatesCity2, foresCity2, forecastLogosCity2);
    });
};









 



