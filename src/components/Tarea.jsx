import React from 'react';

const Mascota = ({nombre, contacto, imagen, padecimiento, eliminarMascota, id}) => {
    return (
        <div className="card mb-2 col-9">
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-text">Contacto: {contacto}</p>
                <p className="card-text">Padecimiento: {padecimiento}</p>
                <img src={imagen} alt="Imagen de la mascota" className="card-img-top" />
                <button onClick={() => eliminarMascota(id)} className="btn btn-danger mt-2">Eliminar</button>
            </div>
        </div>
    );
}

export default Mascota;
