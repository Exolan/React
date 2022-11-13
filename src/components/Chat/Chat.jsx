import { useEffect } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import './Chat.css'

function Chat(){
    const { id } = useParams()
    const array = useSelector((state) => state.arrayMes)
    const [objMes, setObj] = useState();
    const [arrayMes, setArray] = useState([]);
    useEffect(()=>{
        function filterArray(){
            for(const element of array){
                if(element.id == id){
                    setObj(element)
                    setArray(element.arrayMes)
                } 
            }
        }
        filterArray()
    }, [id])

    if(objMes == undefined){
        return null
    }
    
    return(
        <div className="chat-block">
            <header>
                <div className="header">
                    <div className="profile">
                        <div className="logo">
                            <img src={objMes.img} alt="" />
                        </div>
                        <div className="info">
                            <h2>{objMes.name}</h2>
                            <span>{objMes.active}</span>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="attach">скрепка</button>
                        <button className="option">точки</button>
                    </div>
                </div>
            </header>
            <main>
                <div className="mes-main">
                    {arrayMes.map((mes)=>{
                        let user
                        if(mes.sender == 1){
                            user = "nYou"
                        }
                        else{
                            user = "you"
                        }
                        return (
                            <div className={user}>
                                {mes.sender == 1? <img src = {objMes.img} className="mes-logo"/> : <button className="mes-option"></button>}
                                <div>
                                    <span>{mes.text}</span>
                                </div>
                                {mes.sender == 1? <button className="mes-option"></button> : <img src="" alt="" />}
                            </div>
                        )
                    })
                }
                </div>
            </main>
            <footer>
                <div>
                    <button className="button-add"></button>
                    <input type="text" />
                    <button className="stick"></button>
                    <button className="send"></button>
                </div>
            </footer>
        </div>
    )
}

export default Chat