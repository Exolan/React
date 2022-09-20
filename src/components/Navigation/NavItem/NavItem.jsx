import { Link } from "react-router-dom";

function NavItem({name, href, icon}){
    return(
        <Link to={href}>
            <img src={icon} alt="" />
            <span>{name}</span>
        </Link>
    )
}

export default NavItem