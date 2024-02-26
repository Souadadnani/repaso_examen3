import { useState } from "react";
import { URL_SERVER } from "../../../constantes";

export default function FormRegistro({setRegistrar}) {

    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [password, setPassword] = useState("");

    const registro = (nombre, apellidos, password) =>{
        const usuario ={
            "nombre": nombre,
            "apellidos": apellidos,
            "password": password
        }
        console.log(usuario);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }
        fetch(`${URL_SERVER}usuarios`, options)
            .then(response=>{
                if(response.ok){
                    setRegistrar(false);
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .catch(error=>{
                console.error(error);
            })
    }

    return(
        <>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input><br />
            <input type="text" placeholder="Apellidos" value={apellidos} onChange={(e)=>setApellidos(e.target.value)}></input><br />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <button onClick={()=>registro(nombre, apellidos, password)}>Registrar</button>
        </>
            
  
    )

}