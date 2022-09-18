const request = require('request');
const rn = require('random-number');
const chalk = require('chalk');
const url = "https://jsonplaceholder.typicode.com/posts";

const fs = require('fs');
const requirements = {
    min:0,
    max:99,
    integer:true
};



const express = require('express'); 
const app = express();
const port = 8383;

app.use(express.static('public'));

app.get('/info', (req,res) => {
    request({url,json:true},(error,response) => {
        const randomIndexer = rn(requirements);
        res.status(200).json({info: "ID - > " + response.body[randomIndexer].id+"\n"+response.body[randomIndexer].body});
    });
})

app.listen(port, () => console.log(`Server has started on http://localhost:${port}`));





