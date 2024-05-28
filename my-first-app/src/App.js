import './App.css';
import Home from "./Pages/Home";
import ApiTest from "./Pages/ApiTest";
import ImagePlayzone from "./Pages/ImagePlayzone"
import Navbar from "./Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/ApiTest" element = { <ApiTest /> } />
          <Route path = "/ImagePlayzone" element = { <ImagePlayzone /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
