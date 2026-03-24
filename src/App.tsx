import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import ProjectSolo from './pages/ProjectSoloPage'
import './styles/global.scss'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/project/:id' element={<ProjectSolo/>}/>
    </Routes>
  )
}

export default App
