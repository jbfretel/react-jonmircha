import React, { Component } from "react";

// Comunicación entre un componente hijo y su padre
export default class Padre extends Component {
  state = {
    contador: 0,
  };
  hancleIncrementContador = (evt) => {
    this.setState({ contador: this.state.contador + 1 });
  };
  render() {
    return (
      <>
        <h3>Comunicación entre componentes</h3>
        <p>Contador {this.state.contador}</p>
        <Hijo
          handleIncrement={this.hancleIncrementContador}
          mensaje="Mensaje para el hijo 1"
        />
        <Hijo
          handleIncrement={this.hancleIncrementContador}
          mensaje="Mensaje para el hijo 2"
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h4>{props.mensaje}</h4>
      <button onClick={props.handleIncrement}>+</button>
    </>
  );
}
