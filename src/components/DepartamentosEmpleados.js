import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
export default class DepartamentosEmpleados extends Component {
//VARIABLE PARA HACER REFERENCIA AL <select>
select = React.createRef();

state = {
    //Array departamentos
    departamentos: [],
    //UTILIZARLA SIEMPRE!!!!
    status: false,
    //Array empleados
    empleados: []
}

cargarOptions = () => {
    console.log("Cargando...");
    var urlDept = Global.urlDepartamentos;
    axios.get(urlDept).then(response => {
        this.setState({
            departamentos: response.data,
            status: true
        });
    })
        
}

//Al pulsar un botón, mostraremos los empleados
//que pertenecen a dicho departamento
//En una lista (<li>), mostrando su Apellido.
mostrarEmpleados = (e) => {
    e.preventDefault();

    var deptno = this.select.current.value;
    console.log(deptno)

    var url = Global.urlEmpleados;
    var request = "api/Empleados/EmpleadosDepartamento/"+deptno;

        axios.get(url+request).then(response => {
            
            console.log(response.data);
            this.setState({
                empleados: response.data
            });
        })
        console.log("muestro empleados...");
}

//Queremos cargar los customers al iniciar la página
componentDidMount= () =>  {
    this.cargarOptions()
}
  render() {
    return (
      <div>
        <h1>Departamentos API</h1>
        <select ref={this.select}>
            {/* Cargar nombres de departamentos el select */}
                {
                    this.state.status == true &&
                    (
                        this.state.departamentos.map((dept, index) => {
                            return (<option key={index} value={dept.Numero}>
                                {dept.Nombre}
                                </option>)
                        })
                    )
                }
        </select>
        <button onClick={this.mostrarEmpleados}>Mostrar empleados</button>
        <div>
             {/* Cargar empleados filtrados */}
                {
                    this.state.status == true &&
                    (
                        this.state.empleados.map((emp, index) => {
                            return (
                                <li key={index} value={emp.idEmpleado}> Departamento: {emp.departamento},
                                 Apellido: {emp.apellido}, Oficio: {emp.oficio}, Salario: {emp.salario}€</li>)
                        })
                    )
                }
        </div>
      </div>
    )
  }
}
