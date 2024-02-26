import { useState } from "react"
import { URL_SERVER } from "../../../constantes";

export default function FormLogin({setRegistrar, setUsuario}) {

    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");

    const login = (nombre, password) =>{
        fetch(`${URL_SERVER}usuarios?nombre_like=${nombre}`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .then(usuario=>{
                if(usuario.length > 0){
                    if(usuario.password === password){
                        setUsuario(usuario.nombre);
                        localStorage.setItem("usuario", JSON.stringify(usuario.id));
                    }
                }
            })
            .catch(error=>{
                console.error(error);
            })
    }

    const doRegistrar = () => {
        setRegistrar(true);
    }

    return(
        <>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onClick={()=>{login(nombre, password)}}>Login</button>

            <p>¿No estas registrado registrate ahora</p>
            <button onClick={doRegistrar}>Registar</button>
        </>
    )
}