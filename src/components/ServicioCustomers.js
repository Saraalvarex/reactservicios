import React, { Component } from 'react'
//Importar libreria axios
import axios from 'axios';
import Global from '../Global';

export default class extends Component {
// Almacenamos en una variable la url del servicio
url = Global.url;

state = {
    customers: []
}

loadCutomers = () =>  {
    //Implementamos el metodo de petiicion
    var request = "customers.json";
    //Leemos el servicio con el metodo get
    axios.get(this.url+request).then(response => {
        console.log(response.data)
        this.setState({
            customers: response.data.results
        });
    });
}
//Queremos cargar los customers al iniciar la página
componentDidMount = () =>  {
    this.loadCutomers();
}

  render() {
    return (
      <div>
        <h1>Servicio Customers</h1>
        {
            this.state.customers.map((customer, index) => {
                return (<h3
                    style={{color:"fuchsia"}}
                    key={customer.id}>
                        {customer.contactName}
                </h3>)
            })
        }
      </div>
    )
  }
}
