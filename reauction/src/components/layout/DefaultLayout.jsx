import Footer from "./Footer";
import NavBar from "./NavBar";
import './DefaultLayout.css'

export default function DefaultLayout({ children }) {
    return <>
        <NavBar/>
        <main>
            { children }
        </main>
        <Footer/>
    </>
}