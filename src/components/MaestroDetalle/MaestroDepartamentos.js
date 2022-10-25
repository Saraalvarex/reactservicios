import React, { Component } from 'react'
import Global from '../../Global';
import axios from 'axios';
import MaestroEmpleados from './MaestroEmpleados';

export default class MaestroDepartamentos extends Component {
//VARIABLE PARA HACER REFERENCIA AL <select>
select = React.createRef();

state = {
    //Array departamentos
    departamentos: [],
    statusdept: false,
    idDepart : 0
}

cargarOptions = () => {
    console.log("Cargando...");
    var urlDept = Global.urlDepartamentos;
    axios.get(urlDept).then(response => {
        this.setState({
            departamentos: response.data,
            statusdept: true
        });
    })
        
}

//Al pulsar un botón, mostraremos los empleados
//que pertenecen a dicho departamento
//En una lista (<li>), mostrando su Apellido.
mostrarEmpleados = (e) => {
    e.preventDefault();
    var deptno = this.select.current.value;
    this.setState({
        idDepart: deptno
    })
}

//Queremos cargar los departamentos al iniciar la página
componentDidMount= () =>  {
    this.cargarOptions()
}

  render() {
    return (
      <div>
        <h1 style={{color: "blue"}}>Maestro departamentos API</h1>
        <select ref={this.select}>
            {/* Cargar nombres de departamentos el select */}
                {
                    this.state.statusdept == true &&
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
        {
            this.state.idDepart!=0 &&
            //Cuando el componente se ha montado... cargamos MaestroEmpleaods
            <MaestroEmpleados iddepartamento={this.state.idDepart}/>
        }
      </div>
    )
  }
}
