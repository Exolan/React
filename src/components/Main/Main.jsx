import Chats from "../Chats/Chats"
import {Routes, Route} from "react-router-dom"
import Chat from "../Chat"

import './Main.css'


function Main(){
    return(
        <div className="Main">
            <Chats/>
            <Routes>
                <Route path=":id" element={<Chat/>}/>
            </Routes>
        </div>
    )
}

export default Main