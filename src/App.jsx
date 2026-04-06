import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/HomePage'
import LocaisPage from './pages/LocaisPage'

function App() {

  return (
    <div className="app-container">
      <Header />

      <div className='pages-body'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/locais' element={<LocaisPage />} />
        </Routes>
      </div>
      
    </div>
  )
}

export default App
