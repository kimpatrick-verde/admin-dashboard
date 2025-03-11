import React from 'react'
import { ChartsHeader, LineChart } from '../../components'

export default function Line() {

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3x1'>
      <ChartsHeader category='Chart' title='Inflation Rate'/>
      <div className='w-full'>
        <LineChart />
      </div>
    </div>
  )
}
