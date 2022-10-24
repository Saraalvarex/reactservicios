import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';

export default class extends Component {
    cajaMarcaRef = React.createRef();

    state = {
        //Array coche
        coches: [],
        //UTILIZARLA SIEMPRE!!!!
        status: false,
    }

    cargarCoches = (e) => {
        if (e!= null){
            e.preventDefault();
        }
        var urlCoches = Global.urlCoches;
        axios.get(urlCoches).then(response => {
            this.setState({
                coches: response.data,
                status: true
            });
        })
        console.log("Datos cargados")
    }

    buscarCoches = (e) => {
        e.preventDefault();
        console.log("Filtrando...")
        var cochesAux = this.state.coches;
        //Recuperamos el valor de MI CAJA INPUT
        var marca = this.cajaMarcaRef.current.value.toLowerCase();
        cochesfiltrados= []
        console.log(marca)
        //Metodo filter de ARRAY
        //Array.filter(obj => obj.propiedad == valor
        var cochesfiltrados = cochesAux.filter(car => car.marca.toLowerCase().includes(marca));
            //Asignamos de nuevo los coches de state
            this.setState({
                coches: cochesfiltrados
            });
        }
        // for (let i=0; i<=this.state.coches.length; i++){
        //     //console.log(this.state.coches)
        //     if (this.state.coches[i].marca == marca) {
        //         console.log("dentro")
        //     }
        // }
    

//Queremos cargar los customers al iniciar la página
componentDidMount = () =>  {
    this.cargarCoches()
}

  render() {
    return (
      <div>
        <h1>Buscador API coches</h1>
        <form>
            <label> Introduzca marca del coche: </label>
            <input type="text" ref={this.cajaMarcaRef}/>
            <button onClick={this.buscarCoches}>
                Buscar coche por marca
            </button>
            <button onClick={this.cargarCoches}>
                Cargar
            </button>
        </form>
        <table>
            <thead>
                <tr>
                    <td style={{color:"blue"}}>Marca</td>
                    <td style={{color:"blue"}}>Imagen</td>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.status == true &&
                    (
                        this.state.coches.map((coche, index) => {
                            return (<tr key={index}>
                                <td>{coche.marca}</td>
                                <td><img style={{width: "80px"}} src={coche.imagen}/></td>
                                </tr>)
                        })
                    )
                }
            </tbody>
        </table>
      </div>
    )
  }
}
