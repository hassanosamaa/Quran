import Link from "next/link"

async function getData(){
  const res=await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy")
  if(!res.ok){throw new Error ("error")}
  return res.json()
}
async function Quran({count}) {
    const dataApi=await getData()

    var name=dataApi.data.surahs[count].name
    var ayat=dataApi.data.surahs[count].ayahs
    
 

  return (
    <div className='container mx-auto p-2 pb-32
    mt-[80px] flex flex-col gap-[10px] 
    justify-center items-center '>
        <Link href={'/'} className="fixed top-3
        z-20 bg-red-400 p-2 px-4 rounded-lg">
          <i className="icon-circle-left
           text-gray-950  "></i>
        </Link>
        <p className="text-red-800 font-bold
        text-[25px]">{name}</p>

        {ayat.map((e,i)=>(
          <div key={i}
          className="flex gap-[10px] w-full">
            <p 
           className='text-[26px] w-[80%]  bg-gray-100 px-4 rounded-md
            text-gray-950 p-2 text-center
            font-extra '>{e.text}</p>


            <div className="w-[15%]  h-[50px] relative  overflow-hidden">
              <audio className="w-[100px] md:w-[150px]  h-full absolute top-0 
              left-3"
              controls
              src={`${e.audio}`}>
              </audio>
            </div>
         
       </div>
         
    ))}
    </div>
  )
}

export default Quran