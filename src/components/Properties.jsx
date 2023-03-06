import React from "react";

export default function Propiedades(props){
    return(
        <div>
            <h2>Properties</h2>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano?"Verdadero":"Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " - " + props.objeto.correo}</li> 
                <li>{`Como template String ${props.objeto.nombre} - ${props.objeto.correo}`}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funciones).join(", ")}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: 'Las Props por defecto'
}