import React, { Component } from 'react'; 

import Boton from "./componentes/Boton";
import Informacion from "./componentes/Informacion"; //llama a los jsx
import Ayuda from "./componentes/Ayuda";
import Contacto from "./componentes/Contacto";

import lista from "./data/lista.json";

console.log("lista");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 

      compotenteActual :<informacion />
     }
  }

  handlercargasVistas =(e) =>
  {
    const opcion =e.target.id;  // carga un identificador al boton
    console.log(opcion);

    switch (opcion){

      case "ayuda":
      this.setState({compotenteActual:<Ayuda/>});  
      break;

      case "informacion":
      this.setState({compotenteActual:<Informacion/>});  
      break;

      case "contacto":
      this.setState({compotenteActual:<Contacto/>});  
      break;

      default:
        
      break;

    }


  }

  render() { 
    return ( 
   
   <React.Fragment>
        
        <div className="jumbotron">
          <h1>Navegación</h1>
        </div>

        <div className="row">
            <div className ="col-4 col-botonera">
              {
              lista.map( (item, i)=> (
                <Boton key={i} handlercargasVistas={this.handlercargasVistas} id={item.id} etiqueta={item.etiqueta}/>// cada vez que le den clic, pone el valor que cargo del Json
              ))
            }
            </div>
            
            <div className="col-8 visor">
              { 
                this.state.compotenteActual
              }
            
            </div>
            </div>
    </React.Fragment>
     );
  }
}
 
export default App;