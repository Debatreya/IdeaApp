const express = require('express');//import express
const { listen } = require('express/lib/application');
const serverConfig = require('./configs/server.config')

const app = express();//central character of server


app.listen(serverConfig.PORT, () => {//localhost:PORT and changable things are stored in the configs folders
    console.log('server started');
})