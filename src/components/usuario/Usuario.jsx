import { useState } from "react";
import FormRegistro from "./FormRegistro";
import IsLogin from "./IsLogin";

export default function Usuario({usuario, setUsuario}) {

    const [registrar, setRegistrar] = useState(false);
   
    return(
        <>
            {registrar? <FormRegistro setRegistrar={setRegistrar}/> : <IsLogin usuario={usuario} setUsuario={setUsuario} setRegistrar={setRegistrar}/>}
        </>
    )
}