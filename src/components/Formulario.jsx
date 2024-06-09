import React, { useState } from 'react';

const Formulario = ({ nombre, setNombre, contacto, setContacto, imagen, setImagen, padecimiento, setPadecimiento, agregarMascota }) => {
    const [imagenFile, setImagenFile] = useState(null);

    const handleImagenChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImagenFile(file);
            const imageUrl = URL.createObjectURL(file);
            setImagen(imageUrl); 
        }
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const mascotaData = {
            nombre: nombre,
            contacto: contacto,
            imagen: imagenFile, 
            padecimiento: padecimiento
        };
        console.log("Datos de la mascota:", mascotaData);
        agregarMascota(mascotaData);
    };

    return (
        <form className="mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="nombre" value={nombre} onChange={e => setNombre(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="contacto" className="form-label">Contacto:</label>
                <input type="text" className="form-control" id="contacto" value={contacto} onChange={e => setContacto(e.target.value)} required />
            </div>
            <div className="mb-3">
                <label htmlFor="imagen" className="form-label">Imagen:</label>
                <input type="file" className="form-control" id="imagen" onChange={handleImagenChange} accept="image/*" required />
                {imagenFile && <img src={URL.createObjectURL(imagenFile)} alt="Imagen de la mascota" style={{ marginTop: '10px', maxWidth: '150px', maxHeight: '150px' }} />}
            </div>
            <div className="mb-3">
                <label htmlFor="padecimiento" className="form-label">Padecimiento:</label>
                <input type="text" className="form-control" id="padecimiento" value={padecimiento} onChange={e => setPadecimiento(e.target.value)} required />
            </div>
            <button type="submit" className="btn btn-primary">Agregar mascota</button>
        </form>
    );
}

export default Formulario;
