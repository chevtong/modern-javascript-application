
export const displayToday = (data, cityNumber, cityTag, currentTemp, tempRange, sunImage) => {

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