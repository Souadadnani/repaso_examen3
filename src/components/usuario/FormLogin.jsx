import { useState } from "react"
import { URL_SERVER } from "../../../constantes";

export default function FormLogin({setRegistrar, setUsuario}) {

    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");

    const login = (name, passwrd) =>{
        fetch(`${URL_SERVER}usuarios?nombre_like=${name}`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .then((data)=>{
                if(data.length > 0){
                    const usuarioServer = data[0];
                    if(usuarioServer.password === passwrd){      
                        localStorage.setItem("usuario", JSON.stringify(usuarioServer.id));
                        setUsuario(usuarioServer.nombre);
                    }else{
                        console.log("Contraseña incorrecta");
                    }
                }else{
                    console.log("Usuario no existe");
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
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input><br />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br />
            <button onClick={()=>{login(nombre, password)}}>Login</button>

            <p>¿No estas registrado registrate ahora?</p>
            <button onClick={doRegistrar}>Registar</button>
        </>
    )
}