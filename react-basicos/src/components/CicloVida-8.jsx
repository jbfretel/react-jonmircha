import React, { Component } from "react";

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().toLocaleTimeString(),
    };

    console.log(0, "'constructor', el componete aun no se encuentra en el DOM");
    this.timer = null;
  }

  //metodo TICK
  tick = () => {
    this.timer = setTimeout(() => {
      this.setState({ hour: new Date().toLocaleTimeString() });
    }, 1000);
  };

  //EVENTOS:
  handleStart = () => {
    this.tick();
  };
  handleStop = () => {
    clearInterval(this.timer);
  };

  render() {
    console.log(4, "'render',se cambio las props o el state del componente");
    return (
      <>
        <h3>Ciclo de Vida</h3>
        <h4>{this.state.hour}</h4>
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
      </>
    );
  }
}
