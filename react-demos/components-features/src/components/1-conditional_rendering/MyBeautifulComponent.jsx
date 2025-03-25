export default function MyBeautifulComponent({ children }) 
{
    return <div className="d-flex flex-column justify-content-center border border-3 border-info p-4">
        <h4>My Beautiful Component</h4>
        <div className="d-flex flex-row gap-3 align-items-center">
            <img className="w-100" src={import.meta.env.BASE_URL + "vite.svg"}/>
            <p className="fs-1 fw-bold">+</p>
            <img className="w-100" src="src/assets/react.svg"/>
        </div>
        { children }
    </div>
}