import React from 'react'
import Quran from '../components/Quran'


function QuranPage({params}) {
  
  return (
    <Quran count={params.quran}/>
  )
}

export default QuranPage