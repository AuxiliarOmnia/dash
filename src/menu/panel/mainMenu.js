import { Card, Row, Col, Container, Form } from "react-bootstrap"
import { useReducer, useEffect } from "react"
import { ReducerField, ReducerErro } from "../functions/reducer"
import { Input } from "./input"
import { validEmail, validSenha } from "../functions/validators"
import { LoginButton } from "./loginButtoin"

export const MainMenu = () => {

    const [fields, dispatchFields] = useReducer(ReducerField, {
        email: '',
        senha: ''
    })
     
    const [valid, dispatchValid] = useReducer(ReducerErro, {
        list_erros:{
            email: [],
            senha: []
        },
        is_valid: false
    })

    useEffect(()=>{
        let email = validEmail(fields.email);
        let senha = validSenha(fields.senha)
        if (email){ dispatchValid({type: 'Add', erros: email, field: 'email'}) }
        else{ dispatchValid({type: 'Clear', field: 'email'})}
        if (senha){ dispatchValid({type: 'Add', erros: senha, field: 'senha'}) }
        else{ dispatchValid({type: 'Clear', field: 'senha'})}
    },[fields.email, fields.senha])
 
    return (
        <>
            <Container>
                <Row >
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card style={{borderRadius: '30px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 30px', backgroundColor: '#efefef'}}>
                            <Card.Body>
                                <h2 style={{textAlign: "center"}}><strong> Login</strong></h2>
                                <Form>
                                    <Input  field={'Email'}
                                            type={'email'}
                                            lista={valid.list_erros.email}
                                            value={fields.email}
                                            valid={dispatchValid}
                                            fieldName={'email'}
                                            change={dispatchFields}
                                            changeType={'changeEmail'}
                                            validator={validEmail}/>
                                    <Input  field={'Senha'}
                                            type={'password'}
                                            lista={valid.list_erros.senha}
                                            value={fields.senha}
                                            valid={dispatchValid}
                                            fieldName={'senha'}
                                            change={dispatchFields}
                                            changeType={'changeSenha'}
                                            validator={validSenha}/>
                                    <LoginButton email={fields.email}
                                                 senha={fields.senha}
                                                 valid={valid}/>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}