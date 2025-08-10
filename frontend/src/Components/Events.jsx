import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import'./Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">All Events</h2>
      <div className="row">
        {events.map((event) => (
          <div className="col-md-4 mb-4" key={event._id}>
            <Link to={`/events/${event._id}`} className="text-decoration-none text-dark">
              <div className="card text-bg-light h-100">
                <img src={event.banner} className="card-img-top" alt="event_banner" />
                <div className="card-body">
                  <h5 className="card-title">{event.event_title}</h5>
                  <p className="card-text">Status: {event.status}</p>
                  <p className="card-text">Organized by: {event.organized_by}</p>
                  <button className="btn btn-warning mt-2">View More</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
