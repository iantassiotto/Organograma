// import { useState } from "react"
import "../css/CampoTexto.css"

const CampoTexto = (props) => {
    const placeholderMod = `${props.placeholder}...`

    // let valor = "Ian";
    
    // HOOK - useState -> Manipula o estado da variável
    // const [valor, setValor] = useState('')

    // const aoDigitar = (evento) => {
    //   setValor(evento.target.value);
    //   console.log(valor);
    // }

    const aoDigitar = (evento) => {
      props.aoAlterar(evento.target.value);
    }

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderMod}/>
    </div>
  )
}

export default CampoTexto
