import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CadastroUsuario from './Component/CadastroUsuario/CadastroUsuario'
import ListaUsuarios from './Component/ListaUsuarios/ListaUsuarios'
import CadastroProdutos from './Component/CadastroProdutos/CadastroProdutos'
import ListaProdutos from './Component/ListaProdutos/ListaProdutos'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/CadastroUsuario" component={CadastroUsuario} />
      <Route path="/ListaUsuarios" component={ListaUsuarios} />
      <Route path="/CadastroProdutos" component={CadastroProdutos} />
      <Route path="/ListaProdutos" component={ListaProdutos} />

    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
