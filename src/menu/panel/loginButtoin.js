import { Button } from "react-bootstrap";
import { login } from "../functions/login";
import { useNavigate } from "react-router-dom";

export const LoginButton = (props) => {

    let navigate = useNavigate();

    const click = async() => {
        if (props.valid.is_valid === true){
            const result = await login(props.email, props.senha);
            if (result.token){
                sessionStorage.setItem('token', JSON.stringify(result.token));
                navigate('/dashboard/');
            }
            else{
                alert(result.erro)
            }
        }
        else{
            if (!(props.valid.list_erros.email === [])){
                alert(props.valid.list_erros.email)
            }
            else{
                alert(props.valid.list_erros.senha)
            }
        }
 
    }

    return (
        <div className="d-grid gap-2">
            <Button variant="primary" size="md" 
                    style={{borderRadius: "15px"}}
                    onClick={()=>{click()}}>
                <strong>
                    Entrar
                </strong>
            </Button>
        </div>
    )
}