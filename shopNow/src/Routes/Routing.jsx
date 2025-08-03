

import React from 'react'
import Home from '../Pages/home'
import Register from '../Pages/Register'  
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import Product from '../Pages/Product.jsx'
import Cart from '../Pages/Cart'
import NotFound from '../Pages/404'

import { Route, Routes } from 'react-router-dom'

export default function Routing() {
  return (
    <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />  
        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
