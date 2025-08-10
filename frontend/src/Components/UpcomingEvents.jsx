



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import'./Events.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => {
        const upcoming = data.filter((event) => event.status === "Upcoming");
        setEvents(upcoming);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    <div className="container ">
      <h2 className=" events mb-4"> Upcoming Events</h2>

      {events.length === 0 ? (
        <p className="text-muted">No upcoming events found.</p>
      ) : (
        <div className="row">
          {events.map((event) => (
            <div className="col-md-4 mb-4" key={event._id}>
              <div className="card text-bg-light h-100">
                <img
                  src={event.banner}
                  className="card-img-top"
                  alt={event.event_title}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.event_title}</h5>
                  <p className="card-text">
                    <strong>Organizer:</strong> {event.organized_by}
                  </p>
                  <Link to={`/events/${event._id}`} className="btn btn-warning mt-2">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </motion.div>
  );
};

export default UpcomingEvents;
