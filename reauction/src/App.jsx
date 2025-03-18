import './index.css'

import HomeHero from './components/HomeHero'
import DefaultLayout from './components/layout/DefaultLayout'
import Idea from './components/Idea'
import Storia from './components/Storia'

function App() {
  return (
    <DefaultLayout>
      <HomeHero/>
      <Idea/>
      <Storia/>
    </DefaultLayout>
  )
}

export default App
