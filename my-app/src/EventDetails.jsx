/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`https://your-api-url.com/events/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data))
      .catch((error) => console.error("Error fetching event:", error));
  }, [id]);

  // eslint-disable-next-line react/react-in-jsx-scope
  if (!event) return <p>Loading event details...</p>;

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="p-4">
      <h1 className="text-xl font-bold">{event.title}</h1>
      <p>Status: {event.status}</p>
      <p>Capacity: {event.capacity}</p>
      <p>Organizer: {event.organizer?.email || "N/A"}</p>

      <div className="mt-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Accept Invite
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">
          Decline Invite
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
