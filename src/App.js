import { useState } from "react"
import Mascota from "./components/Mascota";
import Boton from "./components/Boton";
import Formulario from "./components/Formulario";

export default function App() {
    const [nombre, setNombre] = useState("");
    const [contacto, setContacto] = useState("");
    const [imagen, setImagen] = useState("");
    const [padecimiento, setPadecimiento] = useState("");
    const [contador, setContador] = useState(0);
    const [listaMascotas, setListaMascotas] = useState([]);

    const agregarMascota = () => {
      let nuevaMascota = {
        id: contador,
        nombre: nombre,
        contacto: contacto,
        imagen: imagen,
        padecimiento: padecimiento,
      }
      setContador(contador + 1);
      setListaMascotas([...listaMascotas, nuevaMascota]);
      // Limpiar los campos después de agregar la mascota
      setNombre("");
      setContacto("");
      setImagen("");
      setPadecimiento("");
    }

    const eliminarMascota = (id) => {
      const nuevaListaMascotas = listaMascotas.filter(mascota => mascota.id !== id);
      setListaMascotas(nuevaListaMascotas);
    }

  return (
    <>
      <div className="fluid mt-5 d-flex flex-column align-items-center">
        <Formulario
          nombre={nombre}
          setNombre={setNombre}
          contacto={contacto}
          setContacto={setContacto}
          imagen={imagen}
          setImagen={setImagen}
          padecimiento={padecimiento}
          setPadecimiento={setPadecimiento}
          agregarMascota={agregarMascota} 
        />
        {
          listaMascotas.length > 0 ? 
          listaMascotas.map(({nombre, contacto, imagen, padecimiento, id}, index) => {
            return(
              <Mascota 
                key={index}
                nombre={nombre}
                contacto={contacto}
                imagen={imagen}
                padecimiento={padecimiento}
                id={id}
                eliminarMascota={eliminarMascota}
              />
            );
          }):
          null
        }
      </div>
    </>
  )
}
