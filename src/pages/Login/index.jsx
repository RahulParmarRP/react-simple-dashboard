import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { useNavigate } from "react-router-dom"
import { checkLoggedInUser } from "../../services/users-services"
import { getCurrentUser } from "../../utils"
const Login = () => {
  const [email, setEmail] = React.useState("Rey.Padberg@karina.biz")
  const [password, setPassword] = React.useState("test1234")
  const navigate = useNavigate()
  const isLoggedIn = getCurrentUser()

  const handleSubmit = () => {
    const user = { email, password }
    checkLoggedInUser(user)
      .then((loggedInUser) => {
        if (loggedInUser) {
          navigate("/dashboard")
        } else {
          alert("Invalid email or password")
        }
      })
      .catch((error) => console.log(error))
  }
  return (
    <div className="login-form-wrapper">
      <Row>
        <Col>
          <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Button variant="primary" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default Login
