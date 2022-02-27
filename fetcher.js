// how it looks like: > node fetcher.js http://www.example.edu/ ./index.html
//Downloaded and saved 3261 bytes to ./index.html

// use the request library to make http request
// use node fs module to write the file
// do not use pipe or asynchronous - do not use writeFileSync

const request = require('request');
const fs = require('fs');

let url = process.argv[2];
let writeTarget = process.argv[3];

const fetcher = function(url, writeTarget) {
  request(url, (error, response, body) => {
    if(error) {
      console.log(error);
      process.exit();
    } else {
      fs.writeFile(writeTarget, body, (error) => {
        if (error) {
          console.log("error writing to file ", error);
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${writeTarget}`);
        }
      });
    }
  });
};


fetcher(url, writeTarget);