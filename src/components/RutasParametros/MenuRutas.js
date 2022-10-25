import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h1>MenuRutas</h1>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/9">Tabla multiplicar 9</NavLink>
            </li>
            <li>
                <NavLink to="/tabla/25">Tabla multiplicar 25</NavLink>
            </li>
            <li>
                <NavLink to="/noexisto">Sin ruta mapeada</NavLink>
            </li>
        </ul>
        </div>
    )
  }
}
