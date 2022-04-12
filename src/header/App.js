import { Navbar, Container } from 'react-bootstrap';

export const Header = (props) => {


    return (
        <>
            <Navbar style={{backgroundColor: "#0b1e35"}}>
                <Container>
                    <Navbar.Brand href="/" style={{color:'white'}}>
                        <strong>
                            {props.name}
                        </strong>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}