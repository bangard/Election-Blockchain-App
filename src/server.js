var express = require('express');
var app = express();
const path = require("path");

//JSON file for deployed contract and network information
const mainContractJSON = require('../build/contracts/MainContract.json')
const electionJSON = require('../build/contracts/Election.json')
const static_dir = path.join(process.cwd() , "front");
require("dotenv").config();

app.use(express.static(static_dir));

app.get('/', (req, res) => {
    res.sendFile(path.join(static_dir , 'index.html'));
});

//Sending MainContract JSON file for its interaction using Truffle
app.get('/mainContractJSON', (req, res) => {
    res.send(mainContractJSON);
});

//Sending ABI object directly for Election contract, since only ABI will be used
app.get('/electionJSON', (req, res) => {
    res.send(electionJSON.abi);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started at 3000');
});