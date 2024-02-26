export default function ListasUsario({usuario, lista}) {
    const eliminar = () =>{
        
    }
    
    return(
        <>
             <h2>Lista :</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(articulo=>{
                        return(
                            <tr key={articulo.id}>
                                <td>{articulo.nombre}</td>
                                <td>{articulo.precio}</td>
                                <td>{articulo.unidades}</td>
                                <td><button onClick={()=>eliminar(articulo)}>Comprar</button></td>
                            </tr>
                        )
                    })
                        
                    }
                </tbody>
            </table>
        </>
    )
}