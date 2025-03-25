import { useEffect, useState } from "react"
import { createConnection, CONNECTION_STATUS } from "./chat";
import MyConsole from "./MyConsole";
import ConsoleMessage from "./ConsoleMessage";

export default function ChatRoom({ roomId }) {
    const [ messages, setMessages ] = useState([])
    const [ id, setId ] = useState(0)

    useEffect(() => {
        /* Component did mount */
        function incrementId() {
            let newId = id + 1
            setId(newId)
        }   

        const connection = createConnection()
        
        const status = connection.connect()
        const msg = (status === CONNECTION_STATUS.CONNECTED) ? "✅ Connected to " + roomId : "Error while connecting!" 
        setMessages([...messages, <ConsoleMessage key={id} message={msg}/>])
        incrementId()
        
        /* Cleanup actions */
        return () => {
            const exitStatus = connection.disconnect()
            if (exitStatus === CONNECTION_STATUS.DISCONNECTED)
                alert("You are leaving " + roomId + "!")
        }
    }, [ roomId ])

    return <>
        <div style={{ height: "fit-content"}} className="col-6 text-center d-flex flex-column align-items-center pt-5">
            <h3 className="display-6">
                Welcome to <span className="fw-bold">{roomId}</span>!    
            </h3>
            <hr className="w-50 my-0"/>
            <h4 className="pt-3"># This is the <span className="fw-bold">{roomId}</span> channel. Have fun!</h4>
        </div>
        <div className="col-6 pt-5">
            <MyConsole>
                { messages }
            </MyConsole>
        </div>        
    </>
}