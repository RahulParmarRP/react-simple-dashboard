import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Container from "react-bootstrap/Container";
import { PrivateRoute } from "./components/PrivateRoute";
import NavbarHeader from "./components/NavbarHeader";
function App() {
  return (
    <>
      <NavbarHeader />
      <Container fluid>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<PrivateRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* <Route exact path="/dashboard" element={isLoggedIn ? <Dashboard /> : < Navigate to="/" />} /> */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
