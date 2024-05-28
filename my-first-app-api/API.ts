// Imports
import NQueens from "./Classes/NQueens";
const express = require("express");
const deviousAPI = express();

// API Routes
const PORT = 8008;

deviousAPI.use(express.json());

deviousAPI.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});

deviousAPI.post("/Salazzle", (req, res) => {
    console.log("_____ Salazzle pinged _____");
    console.log(req.body);
    console.log();
    const myData: NoahData = req.body;
    myData.salazzle = "Salazzle is " + myData.data;
    res.send(myData);
});

deviousAPI.post("/nQueens", (req, res) => {
    console.log("_____ N Queens pinged _____");
    console.log(req.body);
    console.log();

    const N: number = Number(req.body.N);
    if(!Number.isNaN(N)) {
        let myQueenSolver = new NQueens();
        const board: string = myQueenSolver.solveNQueens(N);
        res.send({ board: board });
    }
    else {
        res.send({ board: "Epic fail. Please give me an ACTUAL number next time!" });
    }
});

// Types
type NoahData = {
    data: string;
    salazzle: string;
    fun_number: number;
}