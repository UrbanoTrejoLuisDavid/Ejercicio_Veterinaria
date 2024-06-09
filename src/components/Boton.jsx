import React from 'react';

const Boton = ({nombre, clase}) => {
    return (
        <button className={`btn btn-outline-${clase}`}>
            {nombre}
            </button>
    )
}

export default Boton