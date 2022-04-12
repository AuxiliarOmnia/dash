import { Form } from "react-bootstrap";

export const DropAno = (props) => {

    const ano = [...Array(6).keys()].map(element => 
        <option key={element} value={element+2017} >{element+2017}</option>)

    const changeAno = (value) => {
        props.action({type:'changeAno', value: value});
    } 

    return (
        <Form.Select aria-label="Default select example" onChange={(e) => {changeAno(e.target.value)}} defaultValue={2020}>
            {ano}
        </Form.Select>
    )
}