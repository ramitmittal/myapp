const url = require('url');

let handler = (req, res) => {
    let queryData = url.parse(req.url, true).query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    if (queryData.name) {
	res.end("Hello user!\n");
    }
    else {
	res.end('Hello World\n');
    }
}

module.exports = handler;
