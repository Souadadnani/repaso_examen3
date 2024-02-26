import ListasUsuario from "./ListasUsuario";
import HijosDeCosas from "./HijosDeCosas";
import { useEffect, useState } from "react";
import { URL_SERVER } from "../../../constantes";

export default function Cosas({usuario}) {

    const [buscada, setBuscada] = useState("");
    const [actualizados, setActualizados] = useState(false);
    const [cosasDisponibles, setCosasDisponibles] = useState([]);
    const [lista, setLista] = useState([]);

    useEffect(()=>{
        fetch(`${URL_SERVER}articulos?nombre_like=${buscada}&unidades_gt=0`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{
                    throw new Error(`Error en la solicitud ${response.statusText}`);
                }
            })
            .then(data=>{
                setCosasDisponibles(data);
            })
            .catch(error=>{
                console.error(error);
            })
            setActualizados(false);
    }, [buscada, lista, actualizados])

    return(
        <>
            <HijosDeCosas 
            buscada={buscada} setBuscada={setBuscada} 
            cosasDisponibles={cosasDisponibles} setCosasDisponibles={setCosasDisponibles} 
            setActualizados={setActualizados}  
            setLista={setLista}>
            </HijosDeCosas>
            
            {usuario?  <ListasUsuario usuario={usuario} lista={lista}></ListasUsuario> : " "}
        </>
    )
}