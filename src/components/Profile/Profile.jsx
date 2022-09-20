import styles from './Profile.module.css'

function Profile(){
    return(
        <div className={styles.profile}>
            <img src="/resurce/ProfileImg/img_prof.png" alt="" />
            <span>Henry Jabbawockiez</span>
        </div>
    )
}

export default Profile