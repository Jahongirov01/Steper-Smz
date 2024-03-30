import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Page2 from './pages/Page2'

const App = () => {

  const router =createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"Page2",
      element:<Page2/>
    }
  ])


  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App