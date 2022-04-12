import { logIn } from "../../firebase/login"

export const login = async(email, password) => {
    let tokens = logIn(email, password)
    if (tokens){
        return tokens
    }
}