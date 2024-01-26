import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState('red');
  return (
      <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
        <h1 className='fixed flex flex-wrap justify-center font-bold top-48 inset-x-0 text-5xl'>Background Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shado bg-white px-3 py-2 rounded-3xl">
            <button className="w-12 h-12 rounded-full bg-red-500" onClick={()=>setColor('red')}></button>
            <button className="w-12 h-12 rounded-full bg-green-500" onClick={()=>setColor('green')}></button>
            <button className="w-12 h-12 rounded-full bg-blue-500" onClick={()=>setColor('blue')}></button>
            <button className="w-12 h-12 rounded-full bg-yellow-500" onClick={()=>setColor('yellow')}></button>
            <button className="w-12 h-12 rounded-full bg-purple-500" onClick={()=>setColor('purple')}></button>
            <button className="w-12 h-12 rounded-full bg-pink-500" onClick={()=>setColor('pink')}></button>
          </div>
        </div>
      </div>
  );
}

export default App
