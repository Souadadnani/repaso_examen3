import Usuario from "./Usuario";

export default function Bienvenida({usuario, setUsuario}) {

    const cerrarSesion = () =>{
        localStorage.removeItem("usuario");
        setUsuario(null);
    }
    return(
        <div>
            <span>Bienvenid@ {usuario}</span>
            <button onClick={cerrarSesion}>Cerrar sesion</button>
        </div>

    )
}