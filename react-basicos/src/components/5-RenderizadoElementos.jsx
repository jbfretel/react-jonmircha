import React, { Component } from "react";
import data from "../helpers/data.json";

function ElementoLista({ id, web, name }) {
  return (
    <div>
      <a href={web} key={id}>
        {name}
      </a>
    </div>
  );
}

export default class RenderizadoElementos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seasons: ["Primavera", "Verano", "Otoño", "Invierdo"],
      frameworks: data,
    };
  }
  render() {
    // console.log(this.state.frameworks);
    return (
      <div>
        <h3>Renerizado de Elementos</h3>
        <h4>Estaciones del Año</h4>
        <ol>
          {this.state.seasons.map((el, idx) => (
            <li key={idx}>{el}</li>
          ))}
        </ol>
        <h4>Frameworks Frondend JavasCript</h4>
        <ul>
          {data.frameworks.map((el) => (
            <ElementoLista key={el.id} name={el.name} web={el.web} />
            // <ElementoLista key={el.id} el={el} />
          ))}
        </ul>
      </div>
    );
  }
}
