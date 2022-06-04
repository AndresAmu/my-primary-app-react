import './App.css';
import Testimonio from './componentes/Testimonios.js';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Estos son los testimonios de Chori pa todos</h1>
      <Testimonio
        nombre='Porta'
        lugar='Dique La Isla'
        imagen='Porta'
        profesion='Come traba de 2 pesos'
        trabajo='Córdoba'
        testimonio='Me considero una persona amante de la mala vida, amo tomar la vuelta sea cualquiera la ocación, pero lo que mas me gusta que lo hago por deporte ya es comer trabas de 2 pesos. EL alcohol arruino mi vida y solo tengo 27 años' />
        <Testimonio
        nombre='Ale'
        lugar='La Falda city'
        imagen='Ale'
        profesion='Diablo'
        trabajo='Cruz del Eje'
        testimonio='Soy una atleta joven, me encanta tomar vodka, las mujeres y convertirme en Diablo por las noches. Me gusta salir al norte y comerme a norteñas que arrastran la r al hablar' />
        <Testimonio
        nombre='Dani'
        lugar='La Falda'
        imagen='Dani'
        profesion='Borrachin'
        trabajo='Dique La Falda'
        testimonio='Hola soy Daniel Jesus Quinteros, hace tiempo no me pego una derramada, pero cuando termine el bootcam me voy a reventar la mente tomando todo lo que me den. Me voy a convertir en el famoso Dani de la verdad ' />
        <Testimonio
        nombre='Guachin'
        lugar='La Falda'
        imagen='Guachin'
        profesion='Comer todo lo que se mueva'
        trabajo='todos lados'
        testimonio='Me llamo Agustin, pero me dicen guachin porque soy guachin guachin. Me gusta cagarme a piñas con negros villeros en bares o restaurantes cada tanto, tomar merca del culo de mis amigos' />    
      </div>
    </div>
  );
}

export default App;