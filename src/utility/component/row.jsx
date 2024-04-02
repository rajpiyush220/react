import '../css/main.css'
import Label from './label'
import Input from './input';

function Row({ className, forLabel, text, type, id, name }) {
    return (
        <div>
            <Label className={className} forLabel={forLabel} text={text}/>
            <Input type={type} id={id} name={name}></Input>
        </div>
    );
}

export default Row