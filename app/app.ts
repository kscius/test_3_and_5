// lib/app.ts
import express = require('express');

// Create a new express application instance
const app: express.Application = express();

app.get('/', function (req, res) {
    res.send(_Calculate());
});

app.listen(8080, function () {
	_Calculate();
});

function _Calculate(){
	let Output : string  = '';
	const Print: {[key:number]: string} = {
    	3: "Music",
    	5: "TI",
    	15: "Musical"
  	}
	for (let index = 1; index <= 100; index++) {
        const Music     = index % 3 * -1 + 3;
        const TI        = index % 5 + 5;
		const Musical   = Music * TI;
		const Result	= Print[Musical] || Print[Music] || Print[TI] || index;
		console.log(Result);
		Output += Result + "<br>";
	}
	return Output;
}