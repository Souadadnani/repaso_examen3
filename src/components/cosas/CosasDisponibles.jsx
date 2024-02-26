import { URL_SERVER } from "../../../constantes"

export default function CosasDisponibles({cosasDisponibles, setCosasDisponibles, setLista, setActualizados}) {
    const usuario = JSON.parse(localStorage.getItem("usuario"));  
    const comprarArticulo = (articulo) =>{  
        console.log(articulo.id); 
        fetch(`${URL_SERVER}lista?nombre_like${articulo.nombre}&usuario=${usuario}`)
            .then(response=>{
                if(response.ok){
                    return response.json();
                }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
            })
            .then(data=>{            
                console.log(data);
                if(data.length>0){
                    const articuloToAdd = {
                        nombre: data[0].nombre,
                        precio: data[0].precio,
                        unidades: data[0].unidades+1,
                        usuario: usuario
                    } 
                    const options = {
                        method: 'PUT',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(articuloToAdd)
                    }
                    fetch(`${URL_SERVER}lista/${data[0].id}`, options)
                        .then(response=>{
                            if(response.ok){
                                return response.json();
                                
                            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
                        })
                        setActualizados(true);
                }else{
                    console.log("post");
                    const articuloToAdd = {
                        nombre: articulo.nombre,
                        precio: articulo.precio,
                        unidades: 1,
                        usuario: usuario
                    } 
                    const options = {
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(articuloToAdd)
                    }
                    fetch(`${URL_SERVER}lista`, options)
                        .then(response=>{
                            if(response.ok){
                                return response.json();
                            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
                        })
                        .then(data=>{
                            setLista(data);
                        })
                }
            })
            .catch(error=>{
                console.error(error);
            })
    }

    return(
        <>
            <h2>Cosas Disponibles:</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Unidades</th>
                    </tr>
                </thead>
                <tbody>
                    {cosasDisponibles.map(articulo=>{
                        return(
                            <tr key={articulo.id}>
                                <td>{articulo.nombre}</td>
                                <td>{articulo.precio}</td>
                                <td>{articulo.unidades}</td>
                                <td>{usuario? <button onClick={()=>comprarArticulo(articulo)}>Comprar</button> : " "}</td>
                            </tr>
                        )
                    })
                        
                    }
                </tbody>
            </table>
        </>
    )
}