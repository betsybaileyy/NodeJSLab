const path = require('path');
const fs = require('fs');
const request = require('request');
const rp = require('request-promise');
let dataPath = path.join(__dirname, 'data.json');
let articleArray = [];
let newArray;
let filePath = path.join(__dirname, 'popular-articles.json');

// request('https://reddit.com/r/popular.json', (err, res, body) => {

//     if(err) console.log(err);

//     JSON.parse(body).data.children.forEach(item => {
//         console.log(item.data.title);
//         console.log(item.data.url);
//         console.log(item.data.author)
//     });

//     fs.writeFile(dataPath, res.body, err => {
//         if(err) console.log(err);
//     });

// });
fs.readFile(filePath,{
    encoding: "UTF-8"
}, (err, data) => {
    console.log(data);
});

rp('https://reddit.com/r/popular.json')
    .then(function (body) {
        JSON.parse(body).data.children.forEach(item => {

            newArray = {
                title: item.data.title,
                url: item.data.url,
                author: item.data.author
            }

            articleArray.push(newArray);

        });
        fs.writeFile(filePath, JSON.stringify(articleArray), (err) => {
            if (err) console.log(err);
        });
    })
    .catch(function (err) {
        // Crawling failed...
        console.log(err);
    });



