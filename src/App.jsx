import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/HomePage'

function App() {

  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
      
    </div>
  )
}

export default App
