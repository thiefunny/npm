const ENDPOINT = 'https://www.googleapis.com/youtube/v3/search'
const KEY = '&key=AIzaSyDLVp2hkt-mQYnWaVrFSd_NW2OX7QljoAM'

const URL = `${ENDPOINT}?part=snippet&eventType=upcoming&maxResults=25&q=news&type=video&eventType${KEY}`

fetch(URL)
.then((resolve) => resolve.json())
.then((resolve) => console.log(resolve))
.catch((err) => console.log(err));

// console.log('miki');


// curl \
//   'https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=programzdupy&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed


// curl \
//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=upcoming&maxResults=25&q=news&type=video&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
