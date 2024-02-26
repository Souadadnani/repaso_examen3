import { useState } from "react";
import FormLogin from "./FormLogin";
import FormRegistro from "./FormRegistro";

export default function Usuario({usuario, setUsuario}) {

    const [registrar, setRegistrar] = useState(false);
   
    return(
        <>
            {registrar? <FormLogin usuario={usuario} setUsuario={setUsuario}/> :  <FormRegistro/>}
        </>
    )
}