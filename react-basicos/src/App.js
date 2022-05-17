import "./App.css";
import Componente from "./components/1-Componente";
import Propiedades from "./components/2-Propiedades";
import Estado from "./components/3-Estado";
import RenderizadoCondicional from "./components/4-RenderizadoCondicional";
import RenderizadoElementos from "./components/5-RenderizadoElementos";
import {
  EventosEs6,
  EventosEs7,
  MasSobreEventos,
} from "./components/6-Eventos";
import ComunicacionComponentes from "./components/7-ComunicacionComponentes";
import CicloVida from "./components/8-CicloVida";
import AjaxApi from "./components/9-AjaxApis";
import ContadorHooks from "./components/10-ContadorHooks";
import ScrollHooks from "./components/11-ScrollHooks";
import RelojHooks from "./components/12-RelojHooks";
import AjaxHooks from "./components/13-AjaxHooks";

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
            <hr />
            <AjaxApi />
            <hr />
            <ContadorHooks />
            <hr />
            <ScrollHooks />
            <hr />
            <RelojHooks />
            <hr />
            <AjaxHooks />
          </section>
        </header>
      </div>
    </>
  );
}

export default App;
