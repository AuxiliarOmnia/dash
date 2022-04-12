import { Card } from "react-bootstrap";
import logo from '../static/background.jpg'
import { MainMenu } from "./mainMenu";

export const Panel = () => {
    return(
        <>
            <Card className="bg-dark text-white" >
                <Card.Img src={logo} alt="Card image" />
                <Card.ImgOverlay style={{marginTop:"80px", color: 'black'}}>
                    <MainMenu />
                </Card.ImgOverlay>
            </Card>
        </>
    )
}