import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailPage = () => {
    const params = useParams();
  return (
    <div>
      <h1> Event Detial Page </h1>
      <p>Your Event id is {params.eventId}</p>
      
    </div>
  )
}

export default EventDetailPage
