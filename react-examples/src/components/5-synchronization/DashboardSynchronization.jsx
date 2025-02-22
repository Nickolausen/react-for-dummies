import { useState } from "react";
import ChatRoom from "./ChatRoom";

export default function DashboardSynchronization() 
{
    const [ roomId, setRoomId ] = useState("General")
    const [ mountComponent, setMountComponent ] = useState(false)

    return <section className="container-fluid">
        <div className="row">
            <h2 className="text-center display-3"><span className="fw-bold">Sincronizzazione</span> di un componente</h2>
            <h3 className="text-center display-5">w/<span className="fw-bold">useEffect()</span></h3>
        </div>
        <div className="row w-100 px-5">
            <div className="col-12 d-flex justify-content-center">
                <button className="btn btn-primary mt-3 mb-5" onClick={() => { setMountComponent(!mountComponent) }}>
                   { mountComponent ? "Nascondi" : "Mostra" } componente
                </button>
            </div>
            { mountComponent && 
                <div className="col-12">
                    <div className="d-flex gap-3 align-items-center justify-content-center pb-4">
                        <label htmlFor="roomIdSelection">Scegli la tua stanza:</label>
                        <select id="roomIdSelection" style={{ height: 30 + "px", minWidth: 200 + "px"}} value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                            <option value={"General"}>General</option>
                            <option value={"F.A.Q."}>F.A.Q.</option>
                            <option value={"Gaming"}>Gaming</option>
                        </select>
                    </div>
                    <div className="row">
                        <ChatRoom roomId={roomId}/>
                    </div>
                </div>
            }
        </div>
    </section>
}