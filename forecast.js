export const forecast = (data, cityNumber,foreDates, fores, forecastLogos, foreDatesCity2, foresCity2, forecastLogosCity2) => {

    //get forecast temp from json file
    let forecast1 = Math.round(data.data[1].temp);
    let forecast2 = Math.round(data.data[2].temp);
    let forecast3 = Math.round(data.data[3].temp);
    let forecast4 = Math.round(data.data[4].temp);
    let forecast5 = Math.round(data.data[5].temp);
    let forecastTemps = [
        forecast1,
        forecast2,
        forecast3,
        forecast4,
        forecast5,
    ];

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
    const forecastIcon = (forecastDescription, logo) => {
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

    for (let i=0; i < 5; i++) {
      
        if(cityNumber == 1){

            //city 1 - display forecast date in HTML
            foreDates[i].innerHTML = data.data[i].datetime;

            //city 1 - display forecast temp in HTML
            fores[i].innerHTML = forecastTemps[i] + "°";
         
            //city 1 - display forecast logo in HTML
            forecastIcon(forecastDescriptions[i], forecastLogos[i]);
          
        } else if(cityNumber == 2){

            //city 2 - display forecast date in HTML
            foreDatesCity2[i].innerHTML = data.data[i].datetime;

            //city 2 - display forecast date in HTML
            foresCity2[i].innerHTML = forecastTemps[i] + "°";

            //city 2 - display forecast logos in HTML
            forecastIcon(forecastDescriptions[i], forecastLogosCity2[i]);
          
        };

    };  
};