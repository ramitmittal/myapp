const url = require('url');
const moment = require('moment');

let handler = (req, res) => {
  let queryData = url.parse(req.url, true).query;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let greetString = "";
  
  if (queryData.name) {
    greetString = "Hello user!\n";
  } else {
    greetString = "Hello World!\n";
  }

  let day = moment().format('dddd');
  if (day === "Friday") {
    greetString += "Thank God! It is FRIDAY!\n"
  } else {
    greetString += ("It's " + day + "\n");
  }
  greetString += "Oh yeh Prajwal Bhatia is a new contributor";
  res.end(greetString);
  
};

module.exports = handler;
