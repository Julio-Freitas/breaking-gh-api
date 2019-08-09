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
<<<<<<< HEAD
                <Route path='/' exact component={Home} />
=======
                <Route path='' exact component={Home} />
<<<<<<< HEAD
>>>>>>> 7e97e267362d72b8c9c190cc94b7e1fb2fe7701a
                <Route path='/vivos' exact component={Vivos} />
                <Route path='/mortos' exact component={Mortos} />
                <Route path='/episodios' exact component={Episodios} />
                <Route path='/pesquisa' exact component={Pesquisa} />
=======
                <Route path='vivos' exact component={Vivos} />
                <Route path='mortos' exact component={Mortos} />
                <Route path='episodios' exact component={Episodios} />
                <Route path='pesquisa' exact component={Pesquisa} />
>>>>>>> e4424aaf26760bc1d1f49a5b3df3a09872fb063b
            </Switch>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
