import ChatsHeader from "../ChatsHeader/ChatsHeader"
import ChatsList from "../ChatsList/ChatsList"
import Search from "../Search/Search"

import styles from './Chats.module.css'

function Chats(){
    return(
        <div className={styles.chats}>
            <ChatsHeader/>
            <Search/>
            <ChatsList/>
        </div>
    )
}

export default Chats