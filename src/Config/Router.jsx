import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import AdminPage from '../pages/AdminPage'
import NotFoundPage from '../pages/NotFoundPage'
import { onAuthStateChanged,auth } from './Firebase'
import { useState } from 'react'
function Router() {
    const [isuser, setIsuser] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {

            const uid = user.uid;
            setIsuser(true)
        } else {
            // ...
            setIsuser(false)
        }
    });
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={isuser ? <AdminPage /> : <LoginPage />} />
            <Route path="/signup" element={isuser ? <AdminPage /> : <SignupPage />} />
            <Route path="/admin" element={isuser ? <AdminPage /> : <LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}

export default Router