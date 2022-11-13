import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './ChatsList.css'

function ChatsList(){
    const dispatch = useDispatch()
    const arrayMes = [
        {
            id: 0,
            name: 'Luy Robin', 
            img: '/resurce/PeopleImg/Luy Robin.png', 
            active: 'online', 
            status: 'writes', 
            time: '1 minute ago', 
            lastMes: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ", 
            notRead: 2, 
            lastVoice: null, 
            attachedFiles: 0, 
            attachedPhoto: 0, 
            attachedVideo: 0, 
            href: './0', 
            arrayMes: [
                {sender: 1, text: 'Hello, Alex!', time: '12:38', status: 0},
                {sender: 0, text: 'Hi!', time: '22:00', status: 0}
            ]
        },
        {   
            id: 1,
            name: 'Jared Sunn', 
            img: '/resurce/PeopleImg/Jared Sunn.png', 
            active: 'online', 
            status: 'records voice message', 
            time: '1 minute ago', 
            lastMes: null, 
            notRead: 1, 
            lastVoice: '01:15', 
            attachedFiles: 2, 
            attachedPhoto: 1, 
            attachedVideo: 0, 
            href: './1',
            arrayMes: []
        },
        {   
            id: 2,
            name: 'Nika Jerrardo', 
            img: '/resurce/PeopleImg/Nika Jerrardo.png', 
            active: 'last online 5 hours ago', 
            status: null, 
            time: '3 days ago', 
            lastMes: "Cicero famously orated against his political opponent Lucius Sergius Catilina.", 
            notRead: 0, 
            lastVoice: null, 
            attachedFiles: 0, 
            attachedPhoto: 0, 
            attachedVideo: 0, 
            href: './2',
            arrayMes: []
        },
        {   
            id: 3,
            name: 'David Amrosa', 
            img: '/resurce/PeopleImg/David Amrosa.png', 
            active: 'last online 5 hours ago', 
            status: null, 
            time: '3 days ago', 
            lastMes: "Hi!", 
            notRead: 0, 
            lastVoice: null, 
            attachedFiles: 1, 
            attachedPhoto: 3, 
            attachedVideo: 1, 
            href: './3',
            arrayMes: []
    }]
    dispatch({type: "SET_ARRAYMES", payload: arrayMes})
    return(
        <nav className='chatsList'>
            <ul>
                {arrayMes.map(({name, img, active, status, time, lastMes, notRead, lastVoice, attachedFiles, attachedPhoto, attachedVideo, href}, index)=>(
                    <li key={index}>
                        <NavLink to={href} className='block'>
                            <div className="header">
                                {active=='online' && <div className={active}></div>}
                                <img src={img} alt="" className='avatar'/>
                                <div className='info'>
                                    <h2>{name}</h2>
                                    {status=='writes' && <span>... {status}</span>}
                                    {status=='records voice message' && <div className='status'><img src="/resurce/Rec_Icon.svg" alt="" /> <span>{status}</span></div>}
                                    {status=='sends files' && <div className='status'><img src="/resurce/Rec_Icon.svg" alt="" /> <span>{status}</span></div>}
                                </div>
                                <p className='time'>{time}</p>
                            </div>
                            <div className='mes-content'>
                                <div className="content">
                                    {lastMes!=null && <p>{lastMes}</p>}
                                    {lastVoice!=null && <div className='another-mes'><img src="/resurce/mic.svg" alt="" /><p>Voice message {`(${lastVoice})`}</p></div>}
                                    <div className='files'>
                                        {attachedFiles>0 && <div style={{background: "rgba(42, 139, 242, 0.25)"}}><img src="/resurce/file-text.svg" alt="" /> {attachedFiles>1 ? <span style={{color: '#2A8BF2'}}>Files {`(x${attachedFiles})`}</span> : <span style={{color: '#2A8BF2'}}>File</span>}</div>}
                                        {attachedPhoto>0 && <div style={{background: "rgba(255, 51, 102, 0.25)"}}><img src="/resurce/image.svg" alt="" /> {attachedPhoto>1 ? <span style={{color: '#FF3366'}}>Photos {`(x${attachedPhoto})`}</span> : <span style={{color: '#FF3366'}}>Photo</span>}</div>}
                                        {attachedVideo>0 && <div style={{background: "rgba(107,107,107, 0.25)"}}><img src="/resurce/video.svg" alt="" /> {attachedVideo>1 ? <span style={{color: '#FF3366'}}>Videos {`(x${attachedVideo})`}</span> : <span style={{color: ' rgb(87, 87, 87)'}}>Video</span>}</div>}
                                    </div>
                                </div>
                                {notRead>0 && <div className='not-read'>{notRead}</div>}
                            </div>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default ChatsList