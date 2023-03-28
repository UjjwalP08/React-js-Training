import React from "react";
import { useRouteLoaderData,json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-details');
  return (<EventItem  event={data.event} />);
};

export default EventDetailPage;

// action to add the data
export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    // throw an error
    throw json(
      {
        message: "Could not fetch events you looking",
      },
      {
        status: 500,
      }
    );
  }
  else
  {

    return response;
  }

}

// action to delete the data
export async function action({request,params})
{
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id , {
    method:request.method,
  });

  if (!response.ok) {
    // throw an error
    throw json(
      {
        message: "Could not delete events ",
      },
      {
        status: 500,
      }
    );
  }

  else
  {
    return redirect('/events');
  }
  
}
