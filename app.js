const cors = require('cors')

require('dotenv').config(); 

var express = require('express');
var app = express();
const PORT = process.env.CL_PRT;

let moviesRouter = require('./routes/moviesRouter')

app.use(cors({
  origin:  "http://localhost:5173"
}));
app.use(express.json());
app.use(express.static('public'));

app.use('/movies', moviesRouter);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})