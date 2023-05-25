import React from 'react'
import MainPConfCard from "./MainPConfCard"

export default function ScheduleContainer() {
  return (
    <div className='bg-base-200 pt-10 '>
        <div className="grid grid-cols-new4 justify-items-center">
        <MainPConfCard></MainPConfCard>
        <MainPConfCard></MainPConfCard>
        <MainPConfCard></MainPConfCard>
        <MainPConfCard></MainPConfCard>

        </div>
    </div>
  )
}
