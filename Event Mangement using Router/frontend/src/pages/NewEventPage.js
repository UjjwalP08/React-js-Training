import React from 'react'
import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm'

const NewEventPage = ()=> {
  return (
    <EventForm />
  );
};

export default NewEventPage;

// we use Form component of the react-router so the action attribut by defalut perfor onSubmit event
export async function action ({request,params})
{
  const data = await request.formData();

  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description')
  };
  // use to send the requeset to the data base
  const response = await fetch('http://localhost:8080/events',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(eventData)
  });
console.log('Data sending');
  if (!response.ok) {
    // throw an error
    throw json(
      {
        message: "Could not send data",
      },
      {
        status: 500,
      }
    );
  }

  console.log('Data Sent');
  return redirect('/events');
}
