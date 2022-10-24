import React, { Component } from 'react'
import axios from 'axios'
import Global from '../Global'

export default class extends Component {
    cajaIdRef = React.createRef();

    state = {
        //Objeto customer
        customer: {},
        //UTILIZARLA SIEMPRE!!!!
        status: false
    }

    buscarCustomer = (e) => {
        e.preventDefault();
        //Recuperamos el valor de MI CAJA INPUT
        var id = this.cajaIdRef.current.value;
        var request = "customers/"+id+".json";
        // Almacenamos en una variable la url del servicio
        var url = Global.url+request;
        axios.get(url).then(response => {
            this.setState({
                customer: response.data.customer,
                status: true
            })
        })
    }

  render() {
    return (
      <div>
        <h1>Buscador API Customer</h1>
        <form onSubmit={this.buscarCustomer}>
            <label> Intrduzca ID: </label>
            <input type="text" ref={this.cajaIdRef}/>
            <button>
                Buscar cliente
            </button>
        </form>
        {
            this.state.status == true && (<div>
                <h3 style={{color: "fuchsia"}}>Empresa: {this.state.customer.companyName}</h3>
                <h3 style={{color: "blue"}}>Contacto: {this.state.customer.contactName}</h3>
                <h3 style={{color: "green"}}>Ciudad: {this.state.customer.city}</h3>
                <h3 style={{color: "lightblue"}}>Cargo: {this.state.customer.contactTitle}</h3>
            </div>)
        }
      </div>
    )
  }
}
