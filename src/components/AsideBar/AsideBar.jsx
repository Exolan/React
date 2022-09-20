import BtnLogOut from "../BtnLogOut"
import Navigation from "../Navigation"
import Profile from "../Profile"

import styles from './AsideBar.module.css'

function AsideBar(){
    return(
        <div className={styles.asideBar}>
            <Profile/>
            <Navigation/>
            <BtnLogOut/>
        </div>
    )
}

export default AsideBar