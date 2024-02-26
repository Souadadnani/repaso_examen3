import Bienvenida from "./Bienvenida";
import FormLogin from "./FormLogin";

export default function IsLogin({ usuario, setUsuario, setRegistrar}) {
    return(
        <>
            {usuario? <Bienvenida usuario={usuario} setUsuario={setUsuario}/> : <FormLogin setUsuario={setUsuario} setRegistrar={setRegistrar}/>}
        </>
    )
}