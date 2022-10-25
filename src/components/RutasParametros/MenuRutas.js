import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <h1>MenuRutas</h1>
        <ul>
            <li>
                <a href="/">HOME</a>
            </li>
            <li>
                <a href="/tabla/9">Tabla multiplicar 9</a>
            </li>
            <li>
                <a href="/tabla/25">Tabla multiplicar 25</a>
            </li>
            <li>
                <a href="/noexisto">Sin ruta mapeada</a>
            </li>
        </ul>
        </div>
    )
  }
}
