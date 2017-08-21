const products = require('./data');

// ENDPOINT CALLBACKS
module.exports = {
	getBottoms: (req, res) => {
		console.log("bottoms requested");
		res.send(products.bottoms);
	},
	getShirts: (req, res) => {
		console.log("shirts requested");
		res.send(products.shirts);
	},
	getDresses: (req, res)=>{
		console.log("dresses requested");
		res.send(products.dresses);
	},
	getPatterns: (req, res)=>{
		console.log("patterns requested");
		res.send(products.patterns);
	}

}