import React, { Component } from 'react';
import './App.css';
import Perfil from './Perfil'
import Dados from './Dados'

class App extends Component {

  render() {
    return (
      <div>
        <center>
        <h1>App Meu Perfil</h1>
        </center>
        <Perfil />
        <Dados />
      </div>
    )
  }

};

export default App;