const path = require('path');
const fs = require('fs');
let request = require('request');
let dataPath = path.join(__dirname, '../chirps.json');

fs.readFile(dataPath,{
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data);
});

//JS Object
//stringify chirps
let chirps = {
    chirp1: 'Hey there',
    chirp2: 'Chirp chirp',
    chirp3: 'whats up',
    chirp4: 'nice!',
    chirp5: 'cool!'
};

let myChirps = JSON.stringify(chirps);


fs.writeFile(dataPath, myChirps, (err) => {
if (err) console.log(err);
})

// fs write file - write to file name


// json.parse
// json.stringify()