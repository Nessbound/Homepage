import { Link } from "react-router-dom";

const Navbar = () => {
    return(

        // Header
        <header class = "AppHeader">
            <img src = { require("./Assets/aggretsuko.png") } alt = "Aggretsuko :)" />

            { /* Span for title H1 & links to other pages */ }
            <span class = "HeaderSpan">
                <h1>
                Noah's AWESOME Homepage :D
                </h1>
                <span class = "HeaderLinksSpan">
                    <a href = "/">Home</a>
                    <Link to = "./ApiTest">Api Action</Link>
                    <a href = "https://www.op.gg/summoners/na/Nessbound-NA1" target = "_blank" rel = "noreferrer" >My OP.GG</a>
                    { /* TODO: Make Filter Fun page */ }
                    <Link to = "./ImagePlayzone">Image Playzone</Link>
                </span>
            </span>

            <img src = { require("./Assets/cinamaroll.png") } alt = "Cinamaroll ^-^" />
        </header>
    )
}

export default Navbar;