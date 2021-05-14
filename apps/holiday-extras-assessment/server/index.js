var Flickr = require('flickr-sdk');
const express = require('express');
const app = express();
const port = 5000;

const flickr = new Flickr(process.env.REACT_APP_FLICKR_API_KEY);

app.get('/', (req, res) => {
  const photoId = '51177582804';
  flickr.photos  
    .getInfo({ photo_id: photoId })
    .then((response) => res.send(response.body))
    .catch((error) => console.log(error));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});