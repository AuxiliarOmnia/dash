import { 
    BrowserRouter,
    Routes,
    Route, } from "react-router-dom";

import { Dashboard } from "./dashboard/App";
import { Menu } from "./menu/main";
//import { Sidebar } from "./dashboard/components/Sidebar";

export const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Menu />} />
                    <Route path="dashboard" element={<Dashboard/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}