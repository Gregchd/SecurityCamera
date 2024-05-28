import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage.jsx"
import Test from "./pages/Test.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
