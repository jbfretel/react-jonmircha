import React, { Component } from "react";
//componente funcional que deberia ir en su propia carpeta
function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

//Class component PRINCIPAL
export default class AjaxApi extends Component {
  state = { pockemons: [] };
  //====Ciclo de Vida===
  componentDidMount() {
    //peticiones http
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.results);
        data.results.forEach((el) => {
          fetch(el.url)
            .then((res) => res.json())
            .then((data) => {
              console.log(el);
              let pockemon = {
                id: data.id,
                name: data.name,
                avatar: data.sprites.front_default,
              };
              //en vez de usar el .push() usamos el spred operator
              let pockemons = [...this.state.pockemons, pockemon];
              this.setState({ pockemons });
            });
        });
      });
    //asignación de eventos
    //actualización del estado
  }
  //====================

  render() {
    return (
      <>
        <h3>Ajax Apis - Peticiones Asincronas en class component</h3>
        {this.state.pockemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          this.state.pockemons.map((el) => (
            <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
          ))
        )}
      </>
    );
  }
}
