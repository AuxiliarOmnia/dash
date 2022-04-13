import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarContent } from 'react-pro-sidebar';
//import { DiTerminal } from 'react-icons/di';
//import { BsFileBarGraphFill } from "react-icons/bs";
//import { Link } from 'react-router-dom';
import "../styles/App.scss";

export const Sidebar = (props) => {
    return (
        <ProSidebar width={140}>
            {(props.empresa)? 
                <SidebarHeader style={{textAlign: "center", marginTop:"20px", marginBottom:"20px"}}>
                    <h6>Bem Vindo<br/> {props.empresa}!</h6>
                </SidebarHeader>
            : null}
            <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem >Dashboard
                    </MenuItem>
                    <SubMenu title="Relatórios">
                        <MenuItem>Semanal</MenuItem>
                        <MenuItem>Mensal</MenuItem>
                        <MenuItem>Trimestral</MenuItem>
                        <MenuItem>Semestral</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>

        </ProSidebar>
    )
};
