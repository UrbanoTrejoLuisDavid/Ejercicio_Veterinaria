import React from 'react';

const Mascota = ({ nombre, contacto, imagen, imagenFile, padecimiento, eliminarMascota, id }) => {
    const urlImagen = typeof imagen === 'string' ? imagen : URL.createObjectURL(imagenFile);

    return (
        <div className="card mb-2 d-flex">
            <div className="card-body" style={{ display: 'flex', alignItems: 'center' }}>
                {imagen && <img src={urlImagen} alt="Imagen de la mascota" className="card-img-top" style={{ maxWidth: '150px', maxHeight: '150px', marginRight: '20px' }} />}
                <div>
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Contacto: {contacto}</p>
                    <p className="card-text">Padecimiento: {padecimiento}</p>
                </div>
            </div>
        </div>
    );
}

export default Mascota;




