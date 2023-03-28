import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Homepage from "./pages/Homepage";
import EventPage, { loader as eventLoader } from "./pages/EventPage";
import EditEventPage from "./pages/EditEventPage";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteAction,
} from "./pages/EventDetailPage";
import NewEventPage, { action as eventActions } from "./pages/NewEventPage";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventPage />,
            loader: eventLoader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailLoader,

            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },

          { path: "new", element: <NewEventPage />, action: eventActions },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
