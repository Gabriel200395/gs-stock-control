import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CadastroEmpresa from './Component/CadastroEmpresa/CadastroEmpresa'
import ListaEmpresa from './Component/ListaEmpresa/ListaEmpresa'
import CadastrarProduto from './Component/CadastrarProduto/CadastrarProduto'
import Form from './Component/EditarProdutos/Form/Form'
import ListaProdutos from './Component/ListaProdutos/ListaProdutos'
import CadastreSeuProduto from './Component/CadastreSeuProduto/CadastreSeuProduto'
import VisualizarProduto from './Component/VisualizarProduto/VisualizarProduto'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/CadastroEmpresa" component={CadastroEmpresa} />
      <Route path="/ListaEmpresa" component={ListaEmpresa} />
      <Route path="/CadastrarProduto/:id" component={CadastrarProduto} />
      <Route path="/ListaProdutos" component={ListaProdutos} />
      <Route path="/EditarProdutos/:id" component={Form} />
      <Route path="/CadastreSeuProduto" component={CadastreSeuProduto} />
      <Route path="/VisualizarProduto/:id" component={VisualizarProduto} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
