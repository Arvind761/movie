import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="main lg:flex md:flex flex-wrap justify-between px-4 bg-[#020617] py-4 shadow-md sticky top-0">
        <div className="left flex itmes-center justify-center">
            <img className='w-10 ' src="src\components\black.avif" alt="" />
            <h2 className='font-build text-3xl text-white justify-center'>DavMovieSite</h2>
        </div>
        <div className="right">
            <ul className='flex space-x-4 text-white justify-center'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar