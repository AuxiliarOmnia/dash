import React,{useState, useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { Header } from '../header/App.js';
import { Options } from './components/Options.js';
import { initialState } from './utils/initialState.js';
import { LineChart } from './components/LineChart.js';
import { PieChart, PieChartMoney } from './components/PieChart.js';
import { translations } from './utils/translations.js';
import { parserData } from './functions/parserData.js';
import { DropAno } from './components/dropAno.js';
import { DropPeriodo } from './components/dropPeriodo.js';
import { Reducer } from './functions/reducer.js';
//import { Sidebar } from './components/Sidebar.js';
import { Info } from './components/Info.js'
import { getDb } from '../firebase/getData.js';
import { last } from './functions/lastDay.js';
import './styles/style.css'

export const Dashboard = (props) => {

    const [start, setStart] = useState(true)
    const [dash, setDash] = useState(initialState);
    const [drop, dispatchDrop] = useReducer(Reducer, {
        empresa: null,
        periodo: "Mensal",
        ano: 2020,
        mes: 1
    })
    const [info, setInfo] = useState({
        entrada: '',
        saida: '',
        lucro: ''
    })

    useEffect(() => {
        const update = async() =>  {
            let empresa = drop.empresa
            if (start === true){
                empresa = JSON.parse(sessionStorage.getItem('token')).razao
                dispatchDrop({type: "changeEmpresa", value: empresa})
                setStart(false);
            }
            let datas = await getDb(drop)
            let dash_ = parserData(datas, translations)
            setDash(dash_)
            setInfo(last(dash_))
        }
        update();
    },[drop, start])

    const Line = () => (
        <Card id="card">
            <Card.Body>
                <LineChart  label={dash.datas} 
                    line={dash.lucro}
                    bar1={dash.entrada}   
                    bar2={dash.saida} 
                />
            </Card.Body>
        </Card>
    )

    const Faturamento = () => (
        <Card id="card">
            <Card.Body>
                <h6><strong>Faturamento</strong></h6>
                <PieChartMoney   labels={dash.custo.label} 
                            value={dash.custo.value}
                            width="400"
                        />
            </Card.Body>
        </Card>
    )

    const Operacoes = () => (
        <Card id="card">
            <Card.Body>
                <h6><strong>Operações</strong></h6>
                <PieChart   labels={dash.lancamento.label} 
                            value={dash.lancamento.value}
                            width="400"/>
            </Card.Body>
        </Card>
    )

    const Despesas = () => (
        <Card id="card">
            <Card.Body>
                <h6><strong>Despesas</strong></h6>
                <PieChartMoney   labels={dash.receita.label} 
                            value={dash.receita.value}
                            width="400"/>
            </Card.Body>
        </Card>
    )

    const Entradas = () => (
        <Card id="card">
            <Card.Body>
                <h6><strong>Entradas</strong></h6>
                <PieChartMoney   labels={dash.credito.label} 
                            value={dash.credito.value}
                            width="300"/>
            </Card.Body>
        </Card>
    )

    const Saidas = () => (
        <Card id="card">
            <Card.Body>
                <h6><strong>Saidas</strong></h6>
                <PieChartMoney   labels={dash.debito.label} 
                            value={dash.debito.value}
                            width="300"/>
            </Card.Body>
        </Card>
    )

    return( 
        <>
            <Header name={"DashBoard"}/>
            <Container fluid style={{backgroundColor: "#697179"}} >
                <Card  bg="secondary">
                    <Card.Body>
                        <Row>
                            <Col md={6}>
                                <Card id="card" >
                                    <Card.Body>
                                        <Row>
                                            <Col><DropAno action={dispatchDrop} drop={drop}/></Col>
                                            <Col><DropPeriodo action={dispatchDrop}/></Col>
                                            <Col><Options periodo={drop.periodo} action={dispatchDrop} value={drop.mes}/></Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Line />
                            </Col>
                            <Col md={6}>
                                <Card id="card">
                                    <Card.Body>
                                        <Row>
                                            <Col><Info header={'Entradas'} info={info.entrada} /></Col>
                                            <Col><Info header={'Saidas'} info={info.saida} /></Col>
                                            <Col><Info header={'Lucro'} info={info.lucro} /></Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                                <Row style={{marginTop:"20px"}}>
                                    <Col><Entradas /></Col>
                                    <Col><Saidas /></Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col><Operacoes /></Col>
                            <Col><Faturamento /></Col>
                            <Col><Despesas /></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>

        </> 
    )
}


/* 
        <Col md={1}>
                            <Sidebar empresa={drop.empresa}/>
                        </Col>
*/