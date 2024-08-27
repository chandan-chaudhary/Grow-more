
import { BrowserRouter, Routes, Route, } from "react-router-dom"
import { lazy, Suspense } from "react"
import Home from "./Home";
import Header from './components/navigation/Navbar';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
