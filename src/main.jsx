import React from 'react'
import ReactDOM from 'react-dom/client'
// we are not using App.jsx here
import Header from './component/Header.jsx'
import Body from './component/Body.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'
import Error from './component/Error.jsx'
import {createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';


const AppLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet />
    </div>
  )
}

 const appRouter=createBrowserRouter(
  [
    {
      path:"/", 
      element:<AppLayout/>,
      children:[
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/",
          element:<Body/>
        }
    ],
      errorElement:<Error/>
    },  
  ]
 ); 


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <div>
//     <Header/>
//     <Body/>
//   </div>
// )
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/> );
