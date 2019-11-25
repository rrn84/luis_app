import React from 'react';

const Botones = (props) => {
    return (
        <button onClick ={props.handlercargasVistas} id={props.id} className="
            btn 
            btn-success
            btn-lg 
            btn-block"> 
        {props.etiqueta} 
        </button>
    );
}
 
export default Botones;