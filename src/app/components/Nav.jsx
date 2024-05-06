import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className=' mx-auto p-2 px-4
    flex items-center justify-between bg-blue-500
    fixed top-0 right-0 left-0 z-10
    '>
        <Link href={'/'}><Image src={require("../../../public/logo.png")} 
        alt='logo' width={50} className='cursor-pointer'/></Link>
        <Image src={require("../../../public/quran.png")} 
        alt='logo' width={90}  />
    </div>
  )
}

export default Nav