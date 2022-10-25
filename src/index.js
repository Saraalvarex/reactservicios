import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ServicioCustomers from './components/ServicioCustomers';
import BuscadorCustomer from './components/BuscadorCustomer';
import BuscadorCoches from './components/BuscadorCoches';
import DepartamentosEmpleados from './components/DepartamentosEmpleados';
import MaestroDepartamentos from './components/MaestroDetalle/MaestroDepartamentos';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <DepartamentosEmpleados/>
  // <MaestroDepartamentos/>
  // <React.StrictMode>
  //   <ServicioCustomers/> 
  //   <BuscadorCustomer/>
  //   <BuscadorCoches/>*/}
  // </React.StrictMode>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
