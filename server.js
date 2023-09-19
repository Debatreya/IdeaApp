const express = require('express');//import express
const { listen } = require('express/lib/application');


const app = express();//central character of server


app.listen(3333, () => {//localhost:3333
    console.log('server started');
})