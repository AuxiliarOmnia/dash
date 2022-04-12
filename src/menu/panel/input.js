import { Form } from "react-bootstrap"
import { useState } from "react"

export const Input = (props) => {

    const [start, setStart] = useState(true)

    const change = (value) => {
        let valid = props.validator(value)
        props.change({type: props.changeType, value:value})
        if (valid){
            props.valid({type: 'Add', erros: valid, field: props.fieldName})
        }
        else{
            props.valid({type: 'Clear', field: props.fieldName})
        }
        setStart(false);
    }

    const typeForm = () => {
        if (start === true){
            return (
                <>
                    <Form.Control 
                        type={props.type} 
                        defaultValue={props.value} 
                        placeholder={props.field}
                        style={{borderRadius:'15px'}}
                        onChange={(e)=>{change(e.target.value)}}/>
                </>
            )
        }
        const comp = (props.validator(props.value))?
            <>
                <Form.Control  required isInvalid
                    type={props.type}
                    defaultValue={props.value}
                    placeholder={props.field}
                    onChange={(e)=>{change(e.target.value)}}
                    style={{borderRadius:'15px'}} />
                <Form.Control.Feedback type="invalid">
                    {props.validator(props.value).map(element => <li key={element}>{element}</li> )}
                </Form.Control.Feedback>
            </>:
            <>
                <Form.Control required isValid
                    type={props.type}
                    defaultValue={props.value} 
                    placeholder={props.field}
                    style={{borderRadius:'15px'}}
                    onChange={(e)=>{change(e.target.value)}}/>
            </>

        return comp
    }

    return (
        <>
            <Form.Group className="mb-3">
                <div id={props.fieldName}>
                   {typeForm()}
                </div>
            </Form.Group>
        </>
    )
}
