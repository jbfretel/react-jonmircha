import React, { Component } from "react";

export class EventosEs6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    this.handleClickSuma = this.handleClickSuma.bind(this);
    this.handleClickResta = this.handleClickResta.bind(this);
  }

  handleClickSuma(evt) {
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  }
  handleClickResta(evt) {
    console.log(this);
    this.setState({ contador: this.state.contador - 1 });
  }

  // arrow function no necesita del bind
  handleClickReset = (evt) => {
    console.log(this);
    this.setState({ contador: 0 });
  };

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase Es6</h3>
        <button onClick={this.handleClickSuma}>+</button>
        <button onClick={this.handleClickResta}>-</button>
        <button onClick={this.handleClickReset}>reset</button>
        <h2>{this.state.contador}</h2>
      </div>
    );
  }
}

//PROPERTIES INITIALIZER
export class EventosEs7 extends Component {
  state = {
    contador: 0,
  };

  // Arrow functions
  handleClickSuma = (evt) => {
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  };
  handleClickResta = (evt) => {
    console.log(this);
    this.setState({ contador: this.state.contador - 1 });
  };

  // arrow function no necesita del bind
  handleClickReset = (evt) => {
    console.log(this);
    this.setState({ contador: 0 });
  };

  render() {
    return (
      <div>
        <h3>Eventos en componentes de clase Es7</h3>
        <button onClick={this.handleClickSuma}>+</button>
        <button onClick={this.handleClickResta}>-</button>
        <button onClick={this.handleClickReset}>reset</button>
        <h2>{this.state.contador}</h2>
      </div>
    );
  }
}

//Eventos Nativos - Sintéticos - evento con parametros - Personalizados
function Boton({ handleOnClick }) {
  return <button onClick={handleOnClick}>Boton hecho componente</button>;
}
export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h3>Mas Sobre Eventos</h3>
        <button
          onClick={(e) =>
            this.handleClick(e, "Saludo - pasando parametro desde un evento")
          }
        >
          Saludar
        </button>
        <br />
        {/* Evento Personalizado */}
        <Boton
          handleOnClick={(e) =>
            this.handleClick(
              e,
              "Saludo - pasando parametro desde un evento personalizado"
            )
          }
        />
      </div>
    );
  }
}
