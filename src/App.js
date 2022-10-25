import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import TablaMultiplicar from './components/RutasParametros/TablaMultiplicar';
import Router from './components/Router.js'
import MenuRutas from './components/RutasParametros/MenuRutas';


function App() {
  return (
    // <div className="App">
    //   <TablaMultiplicar numero="5"/>
    //   <TablaMultiplicar numero="8"/>
    // </div>
    <div>
      {/* <MenuRutas/> */}
      <Router/>
    </div>
  );
}

export default App;
