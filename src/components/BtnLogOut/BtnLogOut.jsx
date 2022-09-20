import styles from './BtnLogOut.module.css'

function BtnLogOut(){
    return(
        <div className={styles.btnLogOut}>
            <button>
                <img src="/resurce/power.svg" alt="" />
                <span>LOG OUT</span>
            </button>
        </div>
    )
}

export default BtnLogOut