import React from 'react'
import MainPConfCard from "./MainPConfCard"

export default function ScheduleContainer() {
  return (
    <div className='bg-base-200 pt-10 '>
        <div className="lg md:grid grid-cols-new4 justify-items-center flex flex-wrap ml-3 mr-3 justify-center">
        <MainPConfCard></MainPConfCard>
        <MainPConfCard></MainPConfCard>
        <MainPConfCard></MainPConfCard>
        <MainPConfCard></MainPConfCard>

        </div>
    </div>
  )
}
