// App design
const ApiTest = () => {
    return(
        <body>
            <p>Let's test some APIs baby B)</p>
            <div id = "ApiTestDIV">
                <span>
                    <h2>Salazzle API point</h2>
                    <p>This API will take a string and will say Salazzle is it!</p>
                    <input id = "MostFiendish" />
                    <button onClick = { pingSalazzle } >
                        Salazzle is...
                    </button>
                    <p id = "DeviousP" hidden ></p>
                </span>
                <span>
                    <h2>N Queens Problem</h2>
                    <p>This API will take a number of queens and will place those queens so that they cannot attack each other on a board of that size!</p>
                    <input id = "QueenCount" />
                    <button onClick = { pingNQueens }>
                        Submit Queen count :)
                    </button>
                    <p id = "QueenP" hidden ></p>
                </span>
            </div>

            { /* Footer */ }
            <footer>
            <img src = { require("./Assets/DancingTails.gif") } alt = "Dancing tails \^-^/" />
            <p>
                © Certified based
            </p>
            </footer>
        </body>
    );
}

export default ApiTest;

// Functions
async function pingSalazzle() {
    const response = await fetch("http://127.0.0.1:8008/Salazzle", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: document.getElementById("MostFiendish").value,
            salazzle: "GOATed :3",
            fun_number: 3
        })
    });
    const myVal = await response.json();
    document.getElementById("DeviousP").innerHTML = myVal["salazzle"];
    document.getElementById("DeviousP").hidden = false;
}

async function pingNQueens() {
    const response = await fetch("http://127.0.0.1:8008/nQueens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            N: document.getElementById("QueenCount").value
        })
    });
    const queenBoard = await response.json();
    document.getElementById("QueenP").innerHTML = queenBoard["board"].replaceAll("Q", "<b>Q</b>");
    document.getElementById("QueenP").hidden = false;
}