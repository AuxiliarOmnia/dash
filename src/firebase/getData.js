import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { firebaseConfig } from "./config";

export const getDb = async(drop) => {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const app = initializeApp(firebaseConfig);
    const dbref = ref(getDatabase(app));
    let res = null;
    await get(child(dbref, `dashboard/${token.empresa}/${drop.ano}/${drop.periodo}/${drop.mes}`)).then((snapshot) => {
        if (snapshot.exists()) {
            res = snapshot.val();
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log(error);
    });
    console.log("ok")
    console.log(res)
    if (res){
        return res
    }
}  