import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import Mortos from './component/Mortos';
import Vivos from './component/Vivos';
import Episodios from './component/Episodios';
import Pesquisa from './component/Pesquisa';


class App extends Component{

  render(){
    return (
      <div className="App">
          <BrowserRouter >
          <Header/>
            <Switch>
                <Route path='/breakingbadapi' exact component={Home} />
                <Route path='/vivos' exact component={Vivos} />
                <Route path='/mortos' exact component={Mortos} />
                <Route path='/episodios' exact component={Episodios} />
                <Route path='/pesquisa' exact component={Pesquisa} />
            </Switch>
             <Home />
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
