import React, { Component } from "react";

//componente Clock creado para utilizar como ejemplo el componentWillunmount
class Clock extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log(3, "WillUnmount - El componente ha sido eliminado del DOM");
  }

  render() {
    return <h4>{this.props.hour}</h4>;
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: new Date().toLocaleTimeString(),
      visualize: false,
    };

    console.log(0, "'constructor', el componete aun no se encuentra en el DOM");
    this.timer = null;
  }

  //============CICLO DE VIDA=============
  componentDidMount() {
    console.log(1, "DidMount - El componente ya esta montado en el DOM");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      2,
      "DidUpdate - El estado o las props del componente han cambiado"
    );
    console.log(prevProps);
    console.log(prevState);
  }

  //======================================

  //metodo TICK
  tick = () => {
    this.timer = setInterval(() => {
      this.setState({ hour: new Date().toLocaleTimeString() });
    }, 1000);
  };

  //EVENTOS:
  handleStart = () => {
    this.tick();
    this.setState({ visualize: true });
  };
  handleStop = () => {
    clearInterval(this.timer);
    this.setState({ visualize: false });
  };

  render() {
    console.log(4, "'render',se cambio las props o el state del componente");
    return (
      <>
        <h3>Ciclo de Vida</h3>
        {/* <h4>{this.state.hour}</h4> */}
        {this.state.visualize && <Clock hour={this.state.hour} />}
        <button onClick={this.handleStart}>Start</button>
        <button onClick={this.handleStop}>Stop</button>
      </>
    );
  }
}
