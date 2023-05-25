import React from 'react'
import UsersNavBar from '@/app/components/UsersNavBar'
import ScheduleContainer from '@/app/components/ScheduleContainer'
export default function page({ params: { id } }) {
  return (
        <div>
            <UsersNavBar></UsersNavBar>
            <ScheduleContainer></ScheduleContainer>
        </div>
    )
}
