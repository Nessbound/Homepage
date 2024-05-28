const ImagePlayzone = () => {

    return(
        <body id = "PlayzoneBody" onLoad = { setGoodraPositions } >
            <p>Welcome to the image playzone! :D</p>
            <span id = "ImageSpan">
                <span>
                    <span>
                        <label for = "contrast">Contrast</label>
                        <input id = "contrast" name = "contrast" onChange = { e => changeFilter("contrast", 1, "", 10) } 
                            defaultValue = "1" type = "range" min = "0" max = "10" step = "0.1" />
                        <span id = "contrastSpan">Current Value: 1</span>
                    </span>
                    <span>
                        <label for = "grayscale">Grayscale</label>
                        <input id = "grayscale" name = "grayscale" onChange = { e => changeFilter("grayscale", 0, "", 1) } 
                            defaultValue = "0" type = "range" min = "0" max = "1" step = "0.05" />
                        <span id = "grayscaleSpan">Current Value: 0</span>
                    </span>
                    <span>
                        <label for = "hue-rotate">Huerotate</label>
                        <input id = "hue-rotate" name = "hue-rotate" onChange = { e => changeFilter("hue-rotate", 0, "deg", 360) } 
                            defaultValue = "0" type = "range" min = "0" max = "360" step = "5" />
                        <span id = "hue-rotateSpan">Current Value: 0</span>
                    </span>
                </span>
                <img src = { require("./Assets/Goodra.png") } alt = "Goodra :3" id = "Goodra" />
                <span>
                    <span>
                        <label for = "invert">Invert</label>
                        <input id = "invert" name = "invert" onChange = { e => changeFilter("invert", 0, "", 1) } 
                            defaultValue = "0" type = "range" min = "0" max = "1" step = "0.05" />
                        <span id = "invertSpan">Current Value: 0</span>
                    </span>
                    <span>
                        <label for = "saturate">Saturate</label>
                        <input id = "saturate" name = "saturate" onChange = { e => changeFilter("saturate", 1, "", 10) } 
                            defaultValue = "1" type = "range" min = "0" max = "10" step = "0.1" />
                        <span id = "saturateSpan">Current Value: 1</span>
                    </span>
                    <span>
                        <label for = "sepia">Sepia</label>
                        <input id = "sepia" name = "sepia" onChange = { e => changeFilter("sepia", 0, "", 1) } 
                            defaultValue = "0" type = "range" min = "0" max = "1" step = "0.05" />
                        <span id = "sepiaSpan">Current Value: 0</span>
                    </span>
                </span>
            </span>

            { /* Goodras :D */ }
            <img src = { require("./Assets/goodraShuffle.png") } alt = "Goo :)" id = "contrastGoodra" />
            <img src = { require("./Assets/goodraShuffle.png") } alt = "Goo :)" id = "grayscaleGoodra" />
            <img src = { require("./Assets/goodraShuffle.png") } alt = "Goo :)" id = "hue-rotateGoodra" />
            <img src = { require("./Assets/goodraShuffle.png") } alt = "Goo :)" id = "invertGoodra" />
            <img src = { require("./Assets/goodraShuffle.png") } alt = "Goo :)" id = "saturateGoodra" />
            <img src = { require("./Assets/goodraShuffle.png") } alt = "Goo :)" id = "sepiaGoodra" />


            { /* Footer */ }
            <footer>
                <img src = { require("./Assets/DancingTails.gif") } alt = "Dancing tails \^-^/" />
                <p>
                    © Certified based
                </p>
            </footer>
        </body>
    )
}

export default ImagePlayzone;

// THE FILTER :D
var bigFilta = "contrast(1) grayscale(0) hue-rotate(0deg) invert(0) saturate(1) sepia(0)";

// Functions
function setGoodraPositions() {
    let ids = [ "contrast", "grayscale", "hue-rotate", "invert", "saturate", "sepia" ];
    let defaultValues = [1, 0, 0, 0, 1, 0];
    let maxValues = [10, 1, 360, 1, 10, 1];
    for(let i = 0; i < 6; i++) {
        document.getElementById(`${ids[i]}Goodra`).style.top = `${document.getElementById(ids[i]).offsetTop - 5 }px`;
        document.getElementById(`${ids[i]}Goodra`).style.left = `${document.getElementById(ids[i]).offsetLeft - 5 + (document.getElementById(ids[i]).offsetWidth - 15) * (defaultValues[i] / maxValues[i])}px`;
    }
}

function deviousChange(id, value, additionalInfo) {
    let stringToReplace = id + "(";
    let index = bigFilta.indexOf(stringToReplace)
    for(let i = index + stringToReplace.length; i < bigFilta.length; i++) {
        if(bigFilta[i] !== " ") {
            stringToReplace += bigFilta[i];
        }
        else {
            break;
        }
    }
    bigFilta = bigFilta.replace(stringToReplace, id + "(" + value + additionalInfo + ")")
}

function changeFilter(id, defaultVal, additionalInfo, maxValue) {
    let changeVal = document.getElementById(id).value;
    if(!changeVal) {
        changeVal = defaultVal;
    }
    console.log(document.getElementById(id).offsetLeft - 5 + document.getElementById(id).offsetWidth * (document.getElementById(id).value / 10));
    document.getElementById(`${id}Goodra`).style.top = `${document.getElementById(id).offsetTop - 5 }px`;
    document.getElementById(`${id}Goodra`).style.left = `${document.getElementById(id).offsetLeft - 5 + (document.getElementById(id).offsetWidth - 15) * (document.getElementById(id).value / maxValue)}px`;
    deviousChange(id, changeVal, additionalInfo);
    document.getElementById("Goodra").style.filter = bigFilta;
    document.getElementById(`${id}Span`).innerHTML = `Current Value: ${changeVal}`;
}