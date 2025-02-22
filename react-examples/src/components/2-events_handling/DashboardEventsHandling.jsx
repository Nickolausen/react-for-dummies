import MyInanimateButton from "./MyInanimateButton"
import MyButtonV1 from "./MyButtonV1"
import MyButtonV2 from "./MyButtonV2"
import MyButtonV3 from "./MyButtonV3"

export default function DashboardEventsHandling() 
{
    return <section>
        <h2 className="display-3">Gestione degli <span className="fw-bold">eventi</span></h2>
        <hr className="w-50"/>
        <MyInanimateButton/>
        <div className="py-4 container-fluid">
            <div className="row">
                <MyButtonV1 classNames={"col-12 col-md-4"} message={"La Nina"}/>
                <MyButtonV2 classNames={"col-12 col-md-4"} message={"La Pinta"}/>
                <MyButtonV3 classNames={"col-12 col-md-4"} message={"La Santa Maria"}/>
            </div>
        </div>
    </section>
}