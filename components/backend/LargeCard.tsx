import { Layers } from 'lucide-react'
import React from 'react'

function LargeCard({data}: {data: any}) {
  return (
    <div className={`rounded-lg text-white shadow-md p-8 flex items-center flex-col gap-2 ${data.color}`}>
      <Layers />
      <h4>{data.title}</h4>
      <h2 className='lg:text-3xl text-2xl'>${data.sales}</h2>
    </div>
  )
}

export default LargeCard
