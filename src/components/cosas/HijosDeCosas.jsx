import BarraBusqueda from "./BarraBusqueda";
import CosasDisponibles from "./CosasDisponibles";

export default function HijosDeCosas({buscada, setBuscada, cosasDisponibles, setCosasDisponibles, setActualizados}) {

    return(
        <>
            <BarraBusqueda buscada={buscada} setBuscada={setBuscada}></BarraBusqueda>
            <CosasDisponibles buscada={buscada} 
            cosasDisponibles={cosasDisponibles} 
            setCosasDisponibles={setCosasDisponibles} 
            setActualizados={setActualizados}></CosasDisponibles>
        </>
    )
}