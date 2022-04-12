import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { firebaseConfig } from "./config";

export const logIn = async(email, senha) => {
    const app = initializeApp(firebaseConfig);
    const dbref = ref(getDatabase(app));
    let email_ = email.replace("@","__")
    email_ = email_.replace(".","_")
    let token = null;
    let erro = null
    await get(child(dbref, `usuarios/${email_}/${senha}/tokens`)).then((snapshot) => {
        if (snapshot.exists()) {
            token = snapshot.val();
        } else {
            erro = "No data available";
        }
    }).catch((error) => {
        erro = error;
    });
    return {
        token: token,
        erro: erro
    }
}  