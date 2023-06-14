import './App.css'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Portfolio } from './pages'

document.location.pathname === "/" && window.scrollTo({ top: 0, behavior: 'smooth' })

function App() {
  return (
    <>
     <Suspense fallback={"Loading"}>
          <Routes>
            <Route path='/' element={<Portfolio />} />
          </Routes>
        </Suspense>
    </>
  )
}

export default App
