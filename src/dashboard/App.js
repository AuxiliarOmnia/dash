import React,{useState, useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

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
import { Sidebar } from './components/Sidebar.js';
import { getDb } from '../firebase/getData.js';


export const Dashboard = (props) => {

    const [start, setStart] = useState(true)
    const [dash, setDash] = useState(initialState);
    const [drop, dispatchDrop] = useReducer(Reducer, {
        empresa: null,
        periodo: "Mensal",
        ano: 2020,
        mes: 1
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
            setDash(parserData(datas, translations))
        }
        update();
    },[drop, start])

    return( 
        <>
            <div style={{backgroundColor: "#0b1e35"}}>
                <Container fluid>
                    <Row>
                        <Col md={2}>
                            <Sidebar empresa={drop.empresa}/>
                        </Col>
                        <Col md={10}>
                            <Header name={"DashBoard"}/>
                            <Container fluid style={{backgroundColor: "white"}}>
                                <Row>
                                    <Col md={12}>
                                        <Row style={{marginTop: "20px"}}>
                                            <Col>
                                                <DropAno action={dispatchDrop} drop={drop}/>
                                            </Col>
                                            <Col>
                                                <DropPeriodo action={dispatchDrop}/>
                                            </Col>
                                            <Col>
                                                <Options periodo={drop.periodo} action={dispatchDrop} value={drop.mes}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={7}>
                                                <LineChart  label={dash.datas} 
                                                            line={dash.lucro}
                                                            bar1={dash.entrada}   
                                                            bar2={dash.saida} /> 
                                            </Col>       
                                            <Col md ={5}>
                                                <h6><strong>Faturamento</strong></h6>
                                                <PieChartMoney   labels={dash.custo.label} 
                                                            value={dash.custo.value}/>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <h6><strong>Operações</strong></h6>
                                                <PieChart   labels={dash.lancamento.label} 
                                                            value={dash.lancamento.value}/>
                                            </Col>
                                            <Col>
                                                <h6><strong>Despesas</strong></h6>
                                                <PieChartMoney   labels={dash.receita.label} 
                                                            value={dash.receita.value}/>
                                            </Col>
                                    
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
           
        </> 
    )
}


/* 

*/