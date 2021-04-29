// Caching DOM

const nasaImageContainerEl = document.querySelector(".nasa-image-container");
const googleEmbedEl = document.querySelector(".google-embed-container");
const preloaderContainerEl = document.querySelector(".preloader-container");
const postloaderContainerEl = document.querySelector(".postloader-container");
const errorContainerEl = document.querySelector(".error-container");
const taglineEl = document.querySelector(".app-tagline");
const buttonEl = document.querySelector(".button");


// Preloader / Spinner function

const preloader = {
    on() {
        preloaderContainerEl.innerHTML = `
        <p>Loading big image from NASA</p>
        <img class="preloader-img" src="img/preloader-arrow.svg" alt="Rotating arrow">
        `

        preloaderContainerEl.classList.remove("hidden");
        errorContainerEl.classList.add("hidden");
        postloaderContainerEl.classList.add("hidden");
        buttonEl.classList.add("hidden");
        nasaImageContainerEl.classList.remove("hidden");
    },

    off() {
        postloaderContainerEl.innerHTML = `
        <p>Image loaded</p>
        <p>If you can't see it, please scroll down, the image is partially transparent</p>
        `
        errorContainerEl.classList.add("hidden");
        preloaderContainerEl.classList.add("hidden");
        postloaderContainerEl.classList.remove("hidden");
        buttonEl.classList.remove("hidden");
        nasaImageContainerEl.classList.remove("hidden");

    },

    error() {
        errorContainerEl.innerHTML = `
        <p class="error-info">Image not available on NASA servers.</p>
        <p>Try another location.</p>
        `
        postloaderContainerEl.classList.add("hidden");
        preloaderContainerEl.classList.add("hidden");
        errorContainerEl.classList.remove("hidden");
        buttonEl.classList.add("hidden");
        nasaImageContainerEl.classList.add("hidden");
    },

}


// Mapbox geocoder initialization

mapboxgl.accessToken = 'pk.eyJ1IjoidGhpZWZ1bm55IiwiYSI6ImNraWl4Zjl4eDI5dDUycm81Z3JpdXh3bzgifQ.7C-6wjgHn76s7D0F1Q9dxg';

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    types: 'country,region,place,postcode,locality,neighborhood,address',
    placeholder: 'Enter location to load a picture'
});

geocoder.addTo('#geocoder');


// Mapbox geocoder autocomplete 

geocoder.on('result', e => {

    const location = e.result.place_name;

    preloader.on();

    
    // Printing current location

    taglineEl.innerText = `Current location: ${location}`;
    taglineEl.style.fontSize = '1rem';

    
    // Loading image from NASA servers

    const nasaImageAddress = `https://api.nasa.gov/planetary/earth/imagery?lon=${e.result.center[0]}&lat=${e.result.center[1]}&dim=0.3&api_key=N48XRwWlGEr15IRdacow3bXBeDJM5OkhcZ92w8X0`

    nasaImageContainerEl.innerHTML = `  
    <img class="nasa-image" src="${nasaImageAddress}" alt="The newest picture of ${location} taken by Landsat 8 satellite">
    `

    const imgEl = document.querySelector('.nasa-image');

    imgEl.addEventListener('load', _ => {
        preloader.off();
    });

    imgEl.addEventListener('error', _ => {
        preloader.error();
    })

    // Button opening full image in a new window


    buttonEl.addEventListener('click', _ => {
        window.open(`${nasaImageAddress}`, true)
    })
    
    // Loading Google Maps Embed

    googleEmbedEl.innerHTML = `
    <iframe class="google-embed-iframe" src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBsh24-LzvzGumJN2NaX0gYAQqzstGPeZs&center=${e.result.center[1]},${e.result.center[0]}&zoom=11"></iframe>
    `

    // Clear geocoder input

    geocoder.clear()

})