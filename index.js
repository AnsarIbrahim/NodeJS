const fs = require('fs');
const http = require('http');

/////////////////////////////////////////
// Files
// Blocking synchronous way

// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');

// const textOutput = `This is what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./txt/output.txt', textOutput);
// console.log('File written!');

// Non-blocking asynchronous way

// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('ERROR! 💥');
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     if (err) return console.log('ERROR! 💥');
//     console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       if (err) return console.log('ERROR! 💥');
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
//         if (err) return console.log('ERROR! 💥');
//         console.log('Your file has been written!');
//       });
//     });
//   });
// });

// console.log('Will read file!');

/////////////////////////////////////////
// Server
const server = http.createServer((req, res) => {
  //   console.log(req);
  res.end('Hello from the server!');
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});
