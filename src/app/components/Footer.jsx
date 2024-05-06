import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className=' mx-auto p-2 
    flex items-center justify-evenly bg-blue-500
    fixed bottom-0 right-0 left-0  '>
      
      <Image src={require("../../../public/m3.png")}
      alt='imgfooter' width={40}/>
      <Image src={require("../../../public/m6.png")}
      alt='imgfooter' width={40}/>
      <Image src={require("../../../public/m4.png")}
      alt='imgfooter' width={40}/>
      <Image src={require("../../../public/m7.png")}
      alt='imgfooter' width={40}/>
      <Image src={require("../../../public/m5.png")}
      alt='imgfooter' width={40}/>
      <Image src={require("../../../public/m8.png")}
      alt='imgfooter' width={40}/>
      <Image src={require("../../../public/m2.png")}
      alt='imgfooter' width={40}/>
    </div>
  )
}

export default Footer