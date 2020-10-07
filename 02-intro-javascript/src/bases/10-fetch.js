require('dotenv').config();

const url = 'http://api.giphy.com/v1/gifs/random?api_key=';
const apiKey = process.env.REACT_APP_API_KEY;

const peticion = fetch(`${url}${apiKey}`);
peticion
  .then((response) => response.json())
  .then(({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch(console.warn);
