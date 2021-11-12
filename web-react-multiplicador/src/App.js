import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '0',
      num2: '0',
      result: '0'
    };


    this.handleNum1 = this.handleNum1.bind(this);
    this.handleNum2 = this.handleNum2.bind(this);
  }

  handleNum1(event) {
    this.setState({
      num1: Number(event.target.value)
    });
  }

  handleNum2(event) {
    this.setState({
      num2: Number(event.target.value)
    });
  }

  opera(op) {
    switch(op){
      case 'multiplicar':
        this.setState({
          result: this.state.num1 * this.state.num2,
          operador: '*'
        });
        break;
    }
      
  }

  render() {
    return (
      <>
        <div>
              <legend>
                <h1>Multiplicador de Números</h1>
              </legend>
              <div>
                <input value={this.state.num1} onChange={this.handleNum1} />
                <p>
                <input value={this.state.num2} onChange={this.handleNum2} />
                </p>
              </div>

              
              <button onClick={() => this.opera('multiplicar')}>Calcular</button>
              <p>
              <label> Resultado: {this.state.result} </label>
              </p>
              
        </div>
      </>
    );
  }
}

export default App;