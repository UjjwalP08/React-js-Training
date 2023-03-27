import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
    const router = createBrowserRouter([
        {path:'/',element:<Home/>},
        {path:'/products',element:<Products/>}
    ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
