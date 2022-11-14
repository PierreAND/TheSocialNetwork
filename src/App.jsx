import Navbar from "./Components/NavBar/Navbar"
import Form from "./Components/Form/Form"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from "./Components/Form/LoginForm"

function App() {
  

  return (
  <>
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/register" element={<Form/>} />
    <Route path="/login" element={<LoginForm />} />
  </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
