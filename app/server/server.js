const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const cors = require('cors');


let app = express();
app.use(bodyParser.json());
app.use(cors());

let port = 3030;

// ENDPOINTS
app.get('/api/bottoms', controller.getBottoms);
app.get('/api/shirts', controller.getShirts);
app.get('/api/dresses', controller.getDresses);
app.get('/api/patterns', controller.getPatterns);
app.get('/api/image/:horizontal/:vertical', controller.getPatterns);




app.listen(port, ()=> {
	console.log("started server on port " + port);
})
