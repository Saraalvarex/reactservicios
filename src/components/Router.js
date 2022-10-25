import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Home from './RutasParametros/Home';
import PageNotFound from './RutasParametros/PageNotFound';
import TablaMultiplicar from './RutasParametros/TablaMultiplicar';

export default class Router extends Component {
  render() {
    //Esta funcion cambia dinamicamente las props
    //Permite capturar los parametro de una ruta
    function TablaMultiplicarElement() {
        //SE TIENE QUE LLAMAR IGUAL AL PARAMETRO QUE PASO POR ROUTE
        var { minumero } = useParams();
        	//DEVOLVEMOS LA ETIQUETA QUE DESEEMOS CON LOS 
            //PROPS DE LAS VARIABLES DE useParams
        return <TablaMultiplicar numero={minumero}/>
    }

    return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/tabla/:minumero" element={<TablaMultiplicarElement/>}/>
                {/* Rutas que no existan se utiliza el asterisco en path y debe ser el ultimo <Router/>*/}
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
  }
}
