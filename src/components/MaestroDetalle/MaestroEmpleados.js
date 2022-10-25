import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class MaestroEmpleados extends Component {

state = {
    empleados: [],
    statusemp: false
}

//Al pulsar un botón, mostraremos los empleados
//que pertenecen a dicho departamento
//En una lista (<li>), mostrando su Apellido.
mostrarEmpleados = () => {
    // e.preventDefault();

    var deptno = this.props.iddepartamento;
    console.log(deptno)

    var url = Global.urlEmpleados;
    var request = "api/Empleados/EmpleadosDepartamento/"+deptno;

        axios.get(url+request).then(response => {
            
            console.log(response.data);
            this.setState({
                empleados: response.data,
                statusemp: true
            });
        })
        console.log("muestro empleados...");
}

//Este método debemos llamarlo con cuidado
//Siempre debemos comprobar el tipo de cambio
//Normalmente, se utiliza con props, cuando
//otro componenete nos ha cargado previamente
//Recibe un parámetro, llamado old props que indica
//el antiguo valor de props
componentDidUpdate = (oldProps) =>  {
    //Etiqueta en el padre
    console.log("Actual Props " + this.props.iddepartamento)
    console.log("Old Props "+ oldProps.iddepartamento)
    //Solamente realizaremos cambios en la página cuando los props sean diferentes/han cambiado
    if (this.props.iddepartamento!=oldProps.iddepartamento){
        this.mostrarEmpleados();
    }
}

  render() {
    return (
      <div>
        <h2>Maestro empleados</h2>
        {
            this.state.statusemp == true &&
            (
                this.state.empleados.map((emp, index) => {
                    return (
                        <h3 style={{color:"fuchsia"}} key={index} value={emp.idEmpleado}> Departamento: {emp.departamento},
                        Apellido: {emp.apellido}</h3>)
                })
            )
        }
      </div>
    )
  }
}
