const express = require('express')
const axios = require("axios");
const app = express()
const port = process.env.port || process.env.PORT || 3000

app.get('/', (req, res) => {
  axios.get("https://api.open.mp/servers").then(response => {
    let data = "";
    for(let i = 0; i < response.data.length; i++) { data += response.data[i].ip + '\n'};
    res.send(data);
  }).catch(e => { 
    console.log(e);
    // Let it timeout :)
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})