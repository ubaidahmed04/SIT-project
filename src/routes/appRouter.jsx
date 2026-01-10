import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from "../pages/home"
import About from '../pages/about'
import Layout from '../components/layout'
import Login from '../pages/login'
import Product from '../pages/product'
import ProductDetail from '../pages/productDetail'
import ProductPage from '../components/productPage'
import { ProtectRoute } from '../components/protectedRoute'
const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<div>Page Not Found</div>} />
            <Route element={<ProtectRoute />}>
                <Route element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/shop' element={<ProductPage />} />
                    <Route path='/product/:id' element={<ProductDetail />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRouter