import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Calendar: React.FC = () => {
  return (
    <div className="flex">
      <div className="mx-auto container py-4">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
    </div>
  )
}

export default Calendar