import '../css/main.css'

function Input({type, id, name, cssClass}) {
    return (
        <input type={type} id={id} name={name} className={cssClass} ></input>
    );
}

export default Input