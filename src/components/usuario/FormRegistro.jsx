export default function FormRegistro() {

    const registro = () =>{
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        }
        fetch(`${URL_SERVER}usuarios`, options)
    }

    return(
        <form>
            <input type="text" placeholder="Nombre"></input><br />
            <input type="text" placeholder="Apellidos"></input><br />
            <input type="password" placeholder="Contraseña"></input><br/>
            <button>Registrar</button>
        </form>
    )

}