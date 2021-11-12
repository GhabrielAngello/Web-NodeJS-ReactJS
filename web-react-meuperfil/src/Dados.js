import React, { Component } from 'react';
import './Dados.css';

class Dados extends Component {
  constructor(props){
    super(props);
    this.state = {
      nome: ''
    };
 
    this.entrar = this.entrar.bind(this);
  }
  
  entrar(){
    this.setState({
      nome: 'Ghabriel Angello de Oliveira Silva',
      dados: 'ghabrielangelo13@gmail.com, (13) 981603487 , Guarujá - SP',
      formacao: 'Cursando C.Computação em UNIP, ensino médio completo e curso de inglês básico 2',
      exp: 'Expêriencia em C#, JAVA, PYTHON, NodeJS, ReactJS, HTML, CSS, Javascript e Banco de Dados',
      projeto: 'Meus projetos estão no GitHub "GhabrielAngello"'
    });
  }
 
  render(){
    return(
      <div>
        <center>
          <button onClick={this.entrar}>VER PERFIL</button>
          <h1>{this.state.nome}</h1>
          <h2>{this.state.dados}</h2>
          <h3>{this.state.formacao}</h3>
          <h4>{this.state.exp}</h4>
          <h5>{this.state.projeto}</h5>
        </center>
      </div>
    );
  }
}
 
export default Dados;