require('dotenv').config(); 

var express = require('express');
var app = express();
const PORT = process.env.CL_PRT;

let moviesRouter = require('./routes/moviesRouter')


app.use(express.json());
app.use(express.static('public'));

app.use('/api', moviesRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})