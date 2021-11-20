import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// const PrivateRoute = ({ children, ...rest }) => {
//     const isLoggedIn = localStorage.getItem('user') // determine if authorized, from context or however you're doing it
//     return isLoggedIn ? <Routes {...rest}></Routes> : <Navigate to="/" />
// }


export const PrivateRoute = () => {
    debugger
    const isLoggedIn = localStorage.getItem('user') // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}
// export const TestPrivateRoute = (props) => {
//     return <Routes {...props}></Routes>
// }

export default PrivateRoute