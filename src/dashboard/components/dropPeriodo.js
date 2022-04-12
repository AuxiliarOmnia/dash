import { Form } from "react-bootstrap";

export const DropPeriodo= (props) => {

    const times = ['Mensal','Trimestral','Semestral'].map(element => <option key={element} value={element}>{element}</option>)

    const changePeriodo = (value) => {
        props.action({type: 'changePeriodo', value: value});
    }

    return (
        <Form.Select aria-label="Default select example" id='periodo' onChange={(e) => {changePeriodo(e.target.value)}} >
            { times }
        </Form.Select>
    )
}

