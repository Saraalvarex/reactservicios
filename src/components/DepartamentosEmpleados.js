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
    status: false
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
        // // for (var i = 0; i <= this.state.departamentos.length; i++){
        // //     options.push(
        // //         <option key={i} value={i}>
        // //             {this.state.departamentos[i]}
        // //         </option>
        // //     );
        // // }
        // for (var dept of (this.state.departamentos)){
        //     console.log(dept.Nombre);
        //     // options.push(
        //     //     <option key={dept.Numero} value={dept.Numero}>
        //     //         {dept.Nombre}
        //     //     </option>
        //     // );
        // }
        // console.log(options);
        // // this.setState({
        // //     departamentos: options,
        // //     status: true
        // // });
}


mostrarEmpleados = (e) => {
    e.preventDefault();
   
    var deptno = this.select.current.value;
    var request="GET-api-Empleados-EmpleadosDepartamento-"+deptno;
}

//Queremos cargar los departamentos al iniciar la página
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
                    this.state.statusdept == true &&
                    (
                        this.state.departamentos.map((dept, index) => {
                            return (<option key={index}>
                                {dept.Nombre}
                                </option>)
                        })
                    )
                }
        </select>
        <button onClick={this.mostrarEmpleados}>Mostrar empleados</button>
      </div>
    )
  }
}
