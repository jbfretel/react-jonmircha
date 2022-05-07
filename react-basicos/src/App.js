import "./App.css";
import Componente from "./components/Componente-1";
import Propiedades from "./components/Propiedades-2";
import Estado from "./components/Estado-3";
import RenderizadoCondicional from "./components/RenderizadoCondicional-4";
import RenderizadoElementos from "./components/RenderizadoElementos-5";
import {
  EventosEs6,
  EventosEs7,
  MasSobreEventos,
} from "./components/Eventos-6";
import ComunicacionComponentes from "./components/ComunicacionComponentes-7";
import CicloVida from "./components/CicloVida-8";

function App() {
  const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];
  // const persona = {
  //   name: "Jorge",
  //   age: 39,
  //   info: {
  //     adress: "Calle Jupiter 182",
  //     email: "jb@gmail.com",
  //   },
  // };
  return (
    <>
      <div className="app">
        <header className="App-header">
          <section>
            <ul>
              <h1>Hola</h1>
              {estaciones.map((e, idx) => (
                <li key={idx}>{e}</li>
              ))}
            </ul>
          </section>
          <section>
            {/* <Componente msg="Hola soy un class component" /> */}
            {/* <Componente msg="Hola soy un componente funcional desde una prop" /> */}
            <Componente msg="Hola soy un componente funcional expresado desde una prop" />
            <hr />
            <Propiedades
              string="Estos es una cadena"
              number={25}
              boolean={true}
              array={[1, 2, 3]}
              obj={{ name: "Jon", email: "jon@gmail.com" }}
              function={(num) => num * num}
              reactElement={<i>Esto es un elemento de React</i>}
              reactComponent={
                <Componente msg="Soy un componente de react enviado como prop" />
              }
            />
            <hr />
            <Estado />
            <hr />
            <RenderizadoCondicional />
            <hr />
            <RenderizadoElementos />
            <hr />
            <EventosEs6 />
            <hr />
            <EventosEs7 />
            <hr />
            <MasSobreEventos />
            <hr />
            <ComunicacionComponentes />
            <hr />
            <CicloVida />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
