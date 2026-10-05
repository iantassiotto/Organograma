import { Botao } from "./Botao"
import { useState } from "react"

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        /*Impede o comportamento padrão do HTML ao enviar o formulário, que é recarregar a página*/ 
        evento.preventDefault();
        props.aoColaboradorCadastrado({
            /*Forma simplificada e automática de escrever -> propriedade: valor*/
            nome: nome,
            cargo,
            imagem,
            time
        })
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h3>Preencha os dados para criar o card do colaborador</h3>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario