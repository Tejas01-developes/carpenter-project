import { Card } from '@/library/body/Card';
import { Scrollfit } from '@/library/body/Scrollfit'
import { Services } from '@/library/body/Services';
import { Headdiv } from '@/library/header/Headdiv'
import React from 'react'

const page = async() => {

  return (
    <div>
    <Headdiv/>

    <Scrollfit/>
    <section className='w-full py-16 px-8 flex justify-center'>
      <div className='max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8'>
    <Card endvalue={1000} lable={"Clients Satisfied"}/>
    <Card endvalue={2000} lable={"Projects completed"}/>
    <Card endvalue={40} lable={"Years of Excellence"}/>
    </div>
    </section>

<div>
  <Services/>
</div>

    </div>
  )
}

export default page
