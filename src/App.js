import logo from './logo.svg';
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
      <MenuRutas/>
      <Router/>
    </div>
  );
}

export default App;
