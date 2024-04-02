import '../css/main.css'


function Button({id, className, text}){
    return (
        <button id={id} className={className}>{text}</button>
    );
}

export default Button