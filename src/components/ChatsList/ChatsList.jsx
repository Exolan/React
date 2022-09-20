import './ChatsList.css'

function ChatsList(){
    const array = [
        {name: 'Luy Robin', img: '/resurce/PeopleImg/Luy Robin.png', active: 'online', status: 'writes', time: '1 minute ago', lastMes: "Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes). ", notRead: 2, lastVoice: null, attachedFiles: 0, attachedPhoto: 0, attachedVideo: 0, href: './Luy Robin'},
        {name: 'Jared Sunn', img: '/resurce/PeopleImg/Jared Sunn.png', active: 'online', status: 'records voice message', time: '1 minute ago', lastMes: null, notRead: 1, lastVoice: '01:15', attachedFiles: 2, attachedPhoto: 1, attachedVideo: 0, href: './Jared Sunn'},
        {name: 'Nika Jerrardo', img: '/resurce/PeopleImg/Nika Jerrardo.png', active: 'last online 5 hours ago', status: null, time: '3 days ago', lastMes: "Cicero famously orated against his political opponent Lucius Sergius Catilina.", notRead: 0, lastVoice: null, attachedFiles: 0, attachedPhoto: 0, attachedVideo: 0, href: './Nika Jerrardo'},
        {name: 'David Amrosa', img: '/resurce/PeopleImg/David Amrosa.png', active: 'last online 5 hours ago', status: null, time: '3 days ago', lastMes: "Hi!", notRead: 0, lastVoice: null, attachedFiles: 1, attachedPhoto: 3, attachedVideo: 1, href: './David Amrosa'},
    ]

    return(
        <div className='chatsList'>
            {array.map(({name, img, active, status, time, lastMes, notRead, lastVoice, attachedFiles, attachedPhoto, attachedVideo, href})=>(
                <div key={href} className='block'>
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
                    <div className="content">
                        {lastMes!=null && <p>{lastMes}</p>}
                        {lastVoice!=null && <div><img src="/resurce/mic.svg" alt="" /><p>Voice message {`(${lastVoice})`}</p></div>}
                        {attachedFiles>0 && <div><img src="/resurce/file-text.svg" alt="" /> {attachedFiles>1 ? <span>Files {`(x${attachedFiles})`}</span> : <span>File</span>}</div>}
                        {attachedPhoto>0 && <div><img src="/resurce/image.svg" alt="" /> {attachedPhoto>1 ? <span>Photos {`(x${attachedPhoto})`}</span> : <span>Photo</span>}</div>}
                        {attachedVideo>0 && <div><img src="/resurce/video.svg" alt="" /> {attachedVideo>1 ? <span>Videos {`(x${attachedVideo})`}</span> : <span>Video</span>}</div>}
                        {notRead>0 && <div>{notRead}</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatsList