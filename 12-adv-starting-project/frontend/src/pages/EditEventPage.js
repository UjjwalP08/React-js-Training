import React from 'react'
import { useParams } from 'react-router-dom'

const  EditEventPage = () => {
  const params = useParams();
  return (
    <div>
      <h1> Edit Event Page </h1>
      <p>You Edit Event page id is {params.eventId}</p>
    </div>
  )
}

export default EditEventPage
