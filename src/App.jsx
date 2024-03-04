import { useState } from 'react'
import Input from './component/Input1'
import './App.css'





function App() {
  const [count, setCount] = useState(0)
  const Heyy=()=>{
    return(
    <div>hsdhsgdhak</div>)
  }
  const Heading=()=> <h1>Good Morning Bacho</h1>

  

  return (
    <>
    <Input/>
    <Heading/>
    <Heyy/>
    {<h1>ryefg</h1>}
    <h2>hello</h2>
    </>
  )
}

export default App
