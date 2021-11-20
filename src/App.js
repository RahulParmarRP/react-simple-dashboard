import './App.css'
import Login from './pages/Login'
import { Routes, Route, Navigate } from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Container from 'react-bootstrap/Container'
import { PrivateRoute } from './components/PrivateRoute'
function App() {
  const isLoggedIn = localStorage.getItem('user')
  return (
    <Container fluid>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path='/dashboard' element={<PrivateRoute />}>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Route>
        {/* <Route exact path="/dashboard" element={isLoggedIn ? <Dashboard /> : < Navigate to="/" />} /> */}
      </Routes>
    </Container>
  )
}

export default App
