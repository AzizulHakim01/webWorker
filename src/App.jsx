import react from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePages from './pages/HomePages'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<HomePages/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
