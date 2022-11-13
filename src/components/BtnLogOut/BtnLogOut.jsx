import { Link } from "react-router-dom";

import './BtnLogOut.css'

function BtnLogOut(){
    return(
        <div className="btnLogOut">
            <Link to={'/avtorization'} className="button">
                <img src="/resurce/power.svg" alt="" />
                <span>LOG OUT</span>
            </Link>
        </div>
    )
}

export default BtnLogOut