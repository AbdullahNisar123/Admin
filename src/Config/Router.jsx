import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import AdminPage from '../pages/AdminPage'
import NotFoundPage from '../pages/NotFoundPage'
import AuthContext from '../context/AuthContext'
import AddToCartPage from '../pages/AddToCartPage'
function Router() {
    const { user } = useContext(AuthContext)
    return (
        <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={user ? <AdminPage /> : <LoginPage />} />
            <Route path="/signup" element={user ? <AdminPage /> : <SignupPage />} />
            <Route path="/admin" element={user ? <AdminPage /> : <LoginPage />} />
            <Route path="/cart" element={user ? <AddToCartPage /> : <LoginPage />} />
        </Routes>
    )
}

export default Router