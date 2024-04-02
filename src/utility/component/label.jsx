import '../css/main.css'

function Label({className, forLabel, text}) {
    return (
        <label className={className} htmlFor={forLabel}>{text}</label>
    );
}


export default Label