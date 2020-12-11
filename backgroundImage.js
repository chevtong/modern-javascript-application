

export const backgroundImage = (city, background) => {

    const key = "1AtTqASnS-chw9VgN_btgruDd8sdggmuUpUwbk5RAJM";

    fetch("https://api.unsplash.com/search/photos?query=" + city + "&client_id=" + key + "&per_page=1")
    .then((response)=> response.json())
    .then((data) => {
        
        //grab the url from json 
        let backgroundUrl = data.results[0].urls.small;
        //change background image url
        background.style.backgroundImage = "url('"+backgroundUrl +"')";
    });
}

