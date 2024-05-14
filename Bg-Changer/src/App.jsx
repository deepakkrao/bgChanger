import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState('olive');

  return (
   <div className='w-full h-screen duration-200'
   style={{backgroundColor: bgColor}}>

   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
    <button onClick={() => setbgColor("red")} className=' outline-none text-white bg-red-700 w-20 h-10 rounded-3xl'>Red</button>
    <button  onClick={() => setbgColor("white")} className='text-black bg-white w-20 h-10 rounded-3xl'>White</button>
    <button onClick={() => setbgColor("blue")} className='text-white bg-blue-900 w-20 h-10 rounded-3xl'>Blue</button>
    <button onClick={() => setbgColor("Green")} className='text-white bg-green-700 w-20 h-10 rounded-3xl'>Green</button>
    <button onClick={() => setbgColor("yellow")} className='text-white bg-amber-500 w-20 h-10 rounded-3xl'>Yellow</button>
    <button onClick={() => setbgColor("orange")} className='text-white bg-orange-500 w-20 h-10 rounded-3xl'>Orange</button>
    <button onClick={() => setbgColor("Black")} className='text-white bg-black w-20 h-10 rounded-3xl'>Black</button>
    </div>
    </div> 
   </div>
  )
}

export default App
