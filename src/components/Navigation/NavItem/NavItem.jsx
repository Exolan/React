import { NavLink } from "react-router-dom";

function NavItem({name, href, icon}){
    return(
        <NavLink to={href}>
            <img src={icon} alt="" />
            <span>{name}</span>
        </NavLink>
    )
}

export default NavItem