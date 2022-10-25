import React, { Component } from 'react'

export default class extends Component {
    //En este componente vamos a recibir props de numero
    //Inicializar variables
    constructor(props){
        super(props);
        console.log("Numero props: "+ props.numero);
    }

    state = {
        tabla: []
    }

    generarTabla = () => {
        var datos = [];
        for (var i=1; i<=10; i++){
            var op= parseInt(this.props.numero) * i;
            datos.push(op);
        }
        this.setState({
            tabla: datos
        })
    }

    componentDidMount = () => {
        this.generarTabla();
    }

  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>Tabla Multiplicar {this.props.numero}</h1>
        {
            this.state.tabla.map((num, index) => {
                return (<li key={index}>
                    {num}
                </li>)
            })
        }
      </div>
    )
  }
}
