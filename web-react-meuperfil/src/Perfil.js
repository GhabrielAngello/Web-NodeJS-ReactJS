import React, { Component } from 'react';
import './Perfil.css';

class Perfil extends Component {
    render() {
      
      let img = 'https://www.lance.com.br/files/article_main/uploads/2021/02/28/603bdef934423.jpeg';

      return (
        <img src={img} width={300} height={300} />
      );
    }
  }

  export default Perfil;