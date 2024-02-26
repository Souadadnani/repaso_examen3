export default function BarraBusqueda({buscada, setBuscada}) {

    return(
        <div>
            <input type="text" placeholder="Buscar una cosa" value={buscada} onChange={(e)=>setBuscada(e.target.value)}/>
        </div>
    )
}