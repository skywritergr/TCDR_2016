var http = require('http');

module.exports = {
	getHealthCareAdvice: getHealthCareAdvice
}

var watsonUrl = 'http://disruptlondon2015.appspot.com/need?text=';

//http://disruptlondon2015.appspot.com/need?text=I%20need%20medical%20assistance&number=07515358586
//http://disruptlondon2015.appspot.com/?text=Test&number=+447950675336
//http://disruptlondon2015.appspot.com/need?text=Testing&number=+447950675336

function getHealthCareAdvice(twilioPostBody, cb) {
	var watsonRequest = watsonUrl + twilioPostBody.Body + '&number=' + twilioPostBody.From;
	console.log("watsonRequest", watsonRequest);

	var result = http.get(watsonRequest, function(watsonReponse) {
	  var str = '';
      console.log("Got response: " + watsonReponse.statusCode);
      
	  watsonReponse.on('data', function(chunk) {
	    str += chunk;
        console.log("str", str);
        console.log("chunk", chunk);
	  });

	//   watsonReponse.on('end', function() {
	//     cb(str);
	//   });
	});
}