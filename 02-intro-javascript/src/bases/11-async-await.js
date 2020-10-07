require('dotenv').config();

const getImage = async () => {
  try {
    const link = 'http://api.giphy.com/v1/gifs/random?api_key=';
    const apiKey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`${link}${apiKey}`);
    const {data} = await response.json();
    console.log(data);

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImage().then(console.log);
