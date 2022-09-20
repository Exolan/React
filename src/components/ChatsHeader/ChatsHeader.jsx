import styles from './ChatsHeader.module.css'

function ChatsHeader(){
    return(
        <div className={styles.header}>
            <h1>Chats</h1>
            <button>
                <img src="/resurce/plus.svg" alt="" />
                <span>Create New Chat</span>
            </button>
        </div>
    )
}

export default ChatsHeader