import './App.css';
import { Route } from "react-router-dom";
import LandingPage from "./components/LandinPage"
import country from "./components/Country"
import Detalle from "./components/Detalle"
import Nav from "./components/Nav/Nav"
function App() {
  return (
    <div className="App">
     
     <Route strict exact path={"/"} component={LandingPage}/>
     <Route path={"/countries"} component={Nav}/>
     <Route exact path={"/countries"} component={country}/>
     <Route path={"/countries/:id"} component={Detalle}/>

     
     {/* <Route path={"/countries"} component={Nav}/> */}
    </div>
  );
}

export default App;
