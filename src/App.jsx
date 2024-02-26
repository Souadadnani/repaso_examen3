import { useState } from 'react'
import './App.css'
import Usuario from './components/usuario/Usuario';
import Cosas from './components/cosas/Cosas';

function App() {
  const [usuario, setUsuario] = useState(null);


  return (
    <>
      <Usuario usuario={usuario} setUsuario={setUsuario}></Usuario>
      <Cosas usuario={usuario}></Cosas>
    </>
  )
}

export default App
