import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex bg-[#1C2541] h-16 justify-between items-center px-5'>
        <div className="logo text-3xl font-bold">Todo</div>
        <div className="side-items">
            <ul className='flex items-center gap-[5vw]'>
                <li>Tasks</li>
                <li>Done</li>
                <li>Now</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
