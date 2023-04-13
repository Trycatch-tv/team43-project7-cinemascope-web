import "./Botones.css"

const Botones = (props) => {
    return <i class="btn_elemento"><a href={props.url}>{props.titulo}</a></i>
}

export default Botones