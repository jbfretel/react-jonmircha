import React, { Component } from "react";

function EstadoAhijo(props) {
  return <h3>{props.componenteHijo}</h3>;
}

export default class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
    // setInterval(() => {
    //   this.setState({ contador: this.state.contador + 1 });
    // }, 1000);
  }
  render() {
    return (
      <div>
        <h3>El Estado </h3>
        <p>{this.state.contador}</p>
        <EstadoAhijo componenteHijo={this.state.contador} />
      </div>
    );
  }
}
