import { useNavigate,Form,useNavigation,useActionData,json,redirect } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useActionData();

  const isSumbmiting = navigation.state === 'submitting';

  function cancelHandler() {
    navigate("..");
  }

  return (
    // use From component for using an action
    <Form method={method} className={classes.form}>
      {data && data.errors && <ul>
        {Object.values(data.errors).map(err => <li key={err}>{err}</li>)}
        </ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" disabled={isSumbmiting} onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSumbmiting} >{isSumbmiting?'Submiting...':'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;


// we use Form component of the react-router so the action attribut by defalut perfor onSubmit event
export async function action ({request,params})
{
  const method = request.method;
  const data = await request.formData();

  const eventData = {
    title:data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description')
  };

  let url = 'http://localhost:8080/events';

  if(method === 'PATCH')
  {
    const id = params.eventId;
    url = 'http://localhost:8080/events/' + id;
  }

  // use to send the requeset to the data base
  const response = await fetch(url,{
    method:method,
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(eventData)
  });

  if(response.status === 422)
  {
    return response; 
  }

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

  return redirect('/events');
}

