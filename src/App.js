import React from "react"
import logo from './logo.svg';
import Componente from "./components/Component"
import Propiedades from "./components/Properties"
import Estado from "./components/Estado"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Course
        </p>
          <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>

      <section>
        <Componente msg = "Hola I'm a Class Component"/>
        <Componente msg = "Hola I'm a Functional"/>
      </section>

      <br/>
      <br/>
      <br/>
      <br/>

      <section>
        <Propiedades 
        cadena = "Esto es una cadena de texto"
        numero = {19} 
        booleano = {true}
        arreglo = {[1,2,3]}
        objeto={{nombre:'Jon', correo: "jonmircha@gmail.com "}}
        funciones = {(num) => num * num}
        elementoReact = {<i>Esto es un elemento React</i>}
        componenteReact = {<Componente msg = "Soy un componente pasado como prop"/>}
        />
      </section>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <Estado/>


    </div>
  );
}

export default App;
