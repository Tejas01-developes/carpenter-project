import { Scrollfit } from '@/library/body/Scrollfit'
import { Headdiv } from '@/library/header/Headdiv'
import React from 'react'

const page = async() => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div>
    <Headdiv/>

    <Scrollfit/>

    
    </div>
  )
}

export default page
