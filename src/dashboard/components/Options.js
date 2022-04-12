import { Form } from "react-bootstrap";
import { meses } from "../utils/meses";
import { useEffect } from "react";

export const Options = (props) => {

    const Mensal = () => Object.keys(meses).map(element => <option key={element} value={element}>{meses[element]}</option>)
    const Trimestral = () => [ ...Array(4).keys()].map(element => <option key={element} value={element}>{`${element+1} º Trimestre`}</option>)
    const Semestral = () => [ ...Array(2).keys()].map(element => <option key={element} value={element}>{`${element+1} º Semestre`}</option>)

    const changeData = (value) => {
        props.action({type: 'changeMes', value: value})
    }

    useEffect(()=>{
        let component = document.getElementById('mes')
        component.value = props.value - 1
    })

    return( 
        <>
            <Form.Select aria-label="Default select example" onChange={(e) => {changeData(e.target.value)}} defaultValue={`${props.value}`} id='mes'>
                {(props.periodo === 'Mensal')? <Mensal/> : null}
                {(props.periodo === 'Trimestral')? <Trimestral/> : null}
                {(props.periodo === 'Semestral')? <Semestral/> : null}
            </Form.Select>
        </>
    )
}