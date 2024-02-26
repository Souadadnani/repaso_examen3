import { useState } from "react"

export default function FormLogin() {

    const login = () =>{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }
        fetch(`${URL_SERVER}usuarios`, options)
    }

    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");

    return(

        <form>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
            <input type="password" placeholder="Contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            <button onSubmit={login}>Login</button>
        </form>
      
    )
}