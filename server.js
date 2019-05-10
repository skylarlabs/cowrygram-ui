const express = require('express')

const path = require('path')
const port = process.env.PORT || 8000
const app = express();


// serve static assets normally
app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'landing-page/build')));

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'landing-page/build/index.html'));
});



app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'))
});

app.listen(port)
console.log(`server started on port ${port}`)