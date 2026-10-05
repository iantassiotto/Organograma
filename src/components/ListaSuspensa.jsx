import "../css/ListaSuspensa.css"

const ListaSuspensa = (props) => {

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterar(evento.target.value)} required={props.obrigatorio} value={props.valor}> /*key serve para indicar para o React quando ele deve renderizar cada item das opções e não perder o controle; key recebe o valor do seu parâmetro.*/
                    /*nunca utilize o índice como key, pois caso alguma opção seja removida, o React se perderá na renomeação dos índices da nova ordem dos itens das opções*/
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa