"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
var NQueens_1 = require("./Classes/NQueens");
var express = require("express");
var deviousAPI = express();
// API Routes
var PORT = 8008;
deviousAPI.use(express.json());
deviousAPI.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
deviousAPI.post("/Salazzle", function (req, res) {
    console.log("_____ Salazzle pinged _____");
    console.log(req.body);
    console.log();
    var myData = req.body;
    myData.salazzle = "Salazzle is " + myData.data;
    res.send(myData);
});
deviousAPI.post("/nQueens", function (req, res) {
    console.log("_____ N Queens pinged _____");
    console.log(req.body);
    console.log();
    var N = Number(req.body.N);
    if (!Number.isNaN(N)) {
        var myQueenSolver = new NQueens_1.default();
        var board = myQueenSolver.solveNQueens(N);
        res.send({ board: board });
    }
    else {
        res.send({ board: "Epic fail. Please give me an ACTUAL number next time!" });
    }
});
