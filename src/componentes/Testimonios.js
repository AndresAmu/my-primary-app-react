import React from "react";
import '../stylesheets/Testimonios.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img className="imagen-testimonio"
      src={require(`../imagenes/${props.imagen}.jpg`)}
      alt='Porta Inmundo' />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.lugar}</p>
        <p className="cargo-testimonio"><strong>{props.profesion}</strong> en {props.trabajo}</p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;