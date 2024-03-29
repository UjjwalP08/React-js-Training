import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  return (
    <>
      <EventsList events={events} />
    </>
  );
}
export default EventsPage;

// import this function in App.js to set the value of loader property
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw an error
    // throw {message:"An Error Occurred"}

    // another way using Response to show an error
    // throw new Response(JSON.stringify({ message: "Could not fetch events you looking" }), {
    //   status: 500,
    // });

    // throw an error using json
    throw json(
      {
        message: "Could not fetch events you looking",
      },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
