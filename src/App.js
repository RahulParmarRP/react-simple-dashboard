import './App.css'
import Login from './pages/Login'
import { Routes, Route } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <Container fluid>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Container>
  )
}

export default App
