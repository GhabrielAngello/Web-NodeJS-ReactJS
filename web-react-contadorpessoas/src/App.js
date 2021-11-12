import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          contador: 0
      };

      this.incrementar = this.incrementar.bind(this);
      this.decrementar = this.decrementar.bind(this);
  }

  incrementar(){
      this.setState({
          contador: this.state.contador +1
      });
  }

  decrementar(){
      this.setState({
          contador: this.state.contador -1
      })
  }

  render() {
return (
  <div>
      <center>
      <h1>
          Contador de Pessoas
      </h1>
      <h2>{this.state.contador}</h2>
      <div>
          <button onClick={this.incrementar.bind(this)}>+</button>
      </div>
      <div>
          <button onClick={this.decrementar.bind(this)}>-</button>
      </div>
      </center>
  </div>
);

  }

}

export default App;