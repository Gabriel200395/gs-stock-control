import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CadastroUsuario from './Component/CadastroUsuario/CadastroUsuario'
import ListaUsuarios from './Component/ListaUsuarios/ListaUsuarios'
import CadastrarProduto from './Component/CadastrarProduto/CadastrarProduto'
import Form from './Component/EditarProdutos/Form/Form'
import ListaProdutos from './Component/ListaProdutos/ListaProdutos'
import CadastreSeuProduto from './Component/CadastreSeuProduto/CadastreSeuProduto'
import VisualizarProduto from './Component/VisualizarProduto/VisualizarProduto'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/CadastroUsuario" component={CadastroUsuario} />
      <Route path="/ListaUsuarios" component={ListaUsuarios} />
      <Route path="/CadastrarProduto/:id" component={CadastrarProduto} />
      <Route path="/ListaProdutos" component={ListaProdutos} />
      <Route path="/EditarProdutos/:id" component={Form} />
      <Route path="/CadastreSeuProduto" component={CadastreSeuProduto} />
      <Route path="/VisualizarProduto/:id" component={VisualizarProduto} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
