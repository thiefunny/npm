const URL_ENDPOINT = "https://geo.ipify.org/api/v1?apiKey=at_UEQ7IsyTi637Yk7jJMWci4P5uS9A0&ipAddress="
const URL_GET_IP = 'https://api.ipify.org?format=json'

const drawMap = (lat, lng, city) => {

    const map = L.map('map').setView([lat, lng], 13);
    const marker = L.marker([lat, lng]).addTo(map);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoidGhpZWZ1bm55IiwiYSI6ImNraWl4Zjl4eDI5dDUycm81Z3JpdXh3bzgifQ.7C-6wjgHn76s7D0F1Q9dxg'
    }).addTo(map);

    let roundlat = lat.toPrecision(3);
    let roundlng = lng.toPrecision(3);
    let miklatlng = L.latLng(lat, lng);
    let mikpopup = L.popup({maxWidth:500}).setLatLng(miklatlng).setContent(`MAM CIĘ!!! Jesteś w ${city}!!! (mniej więcej ${roundlat}, ${roundlng})`);
    marker.bindPopup(mikpopup).openPopup();

}

fetch(URL_GET_IP)
    .then((resolve) => resolve.json())
    .then((getip) => getip.ip)
    .then((resolvedip) => {
        return fetch(`${URL_ENDPOINT}${resolvedip}`)
    })
    .then((resolve) => resolve.json())
    .then((resolve) => {
        console.log(resolve)
        console.log(resolve.location.lat)
        console.log(resolve.location.lng)
        drawMap(resolve.location.lat, resolve.location.lng, resolve.location.city)
    })
    .catch((err) => console.log(err));