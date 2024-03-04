import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Input from './component/Input1.jsx'
// import { Input1 } from './component/Input1.jsx'
// import './index.css'
import Header from './component/Header.jsx'
import Body from './component/Body.jsx'

const HeadingComponent2 = () => {
  return (
    <>
      <h1>Good Morning Bacho main</h1>
      <h2>OMG2</h2>
    </>
  )

}


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Header/>
    <Body/>
  </div>
  
)
