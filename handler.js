const dfns = require('date-fns');
const url = require('url');

let handler = (req, res) => {
    let queryData = url.parse(req.url, true).query;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    let greetString = "";
    if (queryData.name) {
	greetString = "Hello user!\n";
    }
    else {
	greetString = "Hello World!\n";
    }
    let friday = dfns.isFriday(new Date());
    if (friday) {
	greetString += "It's Friday!"
    }
    res.end(greetString);

}

module.exports = handler;
