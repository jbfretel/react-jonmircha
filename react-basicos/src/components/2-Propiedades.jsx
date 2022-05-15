import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h3>{props.porDefecto}</h3>
      <ul>
        <li>{props.string}</li>
        <li>{props.number}</li>
        <li>{props.boolean ? "True" : "False"}</li>
        <li>{props.array.join(",  ")}</li>
        <li>{props.obj.name + " - " + props.obj.email}</li>
        <li>{props.function(props.number)}</li>
        <li>{props.array.map(props.function).join(", ")}</li>
        <li>{props.reactElement}</li>
        <li>{props.reactComponent}</li>
      </ul>
    </div>
  );
}

//DEFAULT PROPS
Propiedades.defaultProps = {
  porDefecto: "Las Props",
};

//se usa para decirle a las props que reciban un tipo de dato especifico
//y si se le agrega al final .isRequired , esa prop si o si debe ser pasada
Propiedades.propTypes = {
  number: PropTypes.number.isRequired,
};
