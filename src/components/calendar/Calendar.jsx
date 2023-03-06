import React from 'react'
import FullCalendar from '@fullcalendar/react'
import daygridPlugin from '@fullcalendar/daygrid'
import timegridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const Calendar = () => {
  return (
    <div className='col-lg-9'>

      <div className="">
        <FullCalendar 

          plugins={[daygridPlugin, timegridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay"
          }}
          initialView="dayGridMonth"
        >

        </FullCalendar>

      </div>
    </div>
  )
}

export default Calendar