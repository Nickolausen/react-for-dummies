import { Routes, Route } from 'react-router' 
import HomePage from '../pages/HomePage.jsx'
import AboutUs from '../pages/AboutUs.jsx'
import Shop from '../pages/Shop.jsx'
import NotFound from '../pages/NotFound.jsx'
import ItemPage from '../pages/ItemPage.jsx'

export default function App() {
    return <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='shop'>
            <Route index element={<Shop/>}/>
            <Route path=':itemId' element={<ItemPage/>}/>
        </Route>
        <Route path='/*' element={<NotFound/>}/>
    </Routes>
}