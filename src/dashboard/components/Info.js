import { Card} from "react-bootstrap"

export const Info = (props) => {
    return (
        <Card bg="secondary" style={{color:"white", borderRadius: "10px"}}>
            <Card.Header>
                <strong>
                    {props.header}
                </strong>
            </Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                   <strong>{props.info}</strong> 
                </p>
                </blockquote>
            </Card.Body>
        </Card>
    )
}
