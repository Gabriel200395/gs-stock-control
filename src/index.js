import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CadastroUsuario from './Component/CadastroUsuario/CadastroUsuario'
import ListaUsuarios from './Component/ListaUsuarios/ListaUsuarios'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/CadastroUsuario" component={CadastroUsuario} />
      <Route path="/ListaUsuarios" component={ListaUsuarios} />

    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
