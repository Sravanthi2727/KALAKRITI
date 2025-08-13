// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from 'framer-motion';
// import './Events.css';
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const ShowEvent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/events/${id}`)
//       .then((res) => {
//         if (!res.ok) throw new Error("Failed to fetch event data.");
//         return res.json();
//       })
//       .then((data) => setEvent(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [id]);

//   if (loading) return <p className="text-center my-5">Loading event details...</p>;
//   if (error) return <p className="text-center text-danger my-5">{error}</p>;
//   if (!event) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container my-5">
//         <h2 className="mb-4">
//           Know More About <span className="text-primary">{event.event_title}</span>
//         </h2>

//         {/* Event Banner */}
//         {event.banner && (
//           <div className="text-center mb-4">
//             <img
//               src={event.banner}
//               alt={event.event_title || "Event banner"}
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "400px" }}
//             />
//           </div>
//         )}

//         {/* Main Info */}
//         <h4>{event.event_title}</h4>
//         <p className="text-muted">{event.description}</p>

//         <h5 className="mt-4">
//           Meet our famous artist <strong>{event.artist_name}</strong> and our{" "}
//           <strong>{event.organized_by}</strong> (organizers) at the event.
//         </h5>

//         {/* Artist Bio */}
//         {event.artist_bio && (
//           <p className="fst-italic">About artist: {event.artist_bio}</p>
//         )}

//         {/* Details List */}
//         <ul className="list-unstyled mt-3">
//           {event.event_date?.start && event.event_date?.end ? (
//             <li>
//               <strong>Date:</strong>{" "}
//               {new Date(event.event_date.start).toLocaleString("en-IN", {
//                 dateStyle: "full",
//                 timeZone: "Asia/Kolkata",
//               })}{" "}
//               -{" "}
//               {new Date(event.event_date.end).toLocaleString("en-IN", {
//                 dateStyle: "full",
//                 timeZone: "Asia/Kolkata",
//               })}
//             </li>
//           ) : (
//             <li><strong>Date:</strong> Not specified</li>
//           )}
//           <li><strong>Time:</strong> {event.event_time || "N/A"}</li>
//           <li><strong>Location:</strong> {event.location || "N/A"}</li>
//           <li><strong>Special Activity for you:</strong> {event.activity || "N/A"}</li>
//           <li><strong>Event Status:</strong> {event.status || "N/A"}</li>
//           <li><strong>Price:</strong> {event.price || "Free"}</li>
//         </ul>

//         {/* Testimonials */}
//         {event.testimonials?.length > 0 && (
//           <div className="mt-4">
//             <h5>Testimonials</h5>
//             {event.testimonials.map((t, idx) => (
//               <div key={idx} className="border p-3 mb-2 rounded bg-light">
//                 <strong>{t.name}</strong> – <em>{t.rating}⭐</em>
//                 <p>{t.comment}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Images Gallery */}
//         {event.images?.length > 0 && (
//           <div className="mt-4">
//             <h5>Event Gallery</h5>
//             <div className="row">
//               {event.images.map((img, idx) => (
//                 <div className="col-md-4 mb-3" key={idx}>
//                   <img
//                     src={img}
//                     alt={`event-gallery-${idx}`}
//                     className="img-fluid rounded shadow"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Video Preview */}
//         {event.videos?.length > 0 && (
//           <div className="mt-4">
//             <h5>Event Video</h5>
//             {event.videos.map((video, idx) => (
//               <video key={idx} className="w-100 mb-3 rounded shadow" controls>
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ))}
//           </div>
//         )}

//         {(event.status === "Upcoming")?(<div className="text-center mt-4">
//             <button
//               className="btn btn-warning"
//               onClick={() => toast.success(" Registered successfully!")}
//             >
//               Register Here
//             </button>
//           </div>):(<div className="text-center mt-4">
//             <button
//               className="btn btn-warning"
//             >
//               Completed
//             </button>
//           </div>)}

//       </div>
//     </motion.div>
//   );
// };

// export default ShowEvent;
// import React, { useEffect, useState, useContext } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import "./Events.css";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AppContent } from "../context/AppContext";

// const ShowEvent = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isRegistered, setIsRegistered] = useState(false);

//   const { userData, backendUrl } = useContext(AppContent);

//   // useEffect(() => {
//   //   fetch(`http://localhost:5000/api/events/${id}`)
//   //     .then((res) => {
//   //       if (!res.ok) throw new Error("Failed to fetch event data.");
//   //       return res.json();
//   //     })
//   //     .then((data) => setEvent(data))
//   //     .catch((err) => setError(err.message))
//   //     .finally(() => setLoading(false));
//   // }, [id]);
//   useEffect(() => {
//     fetch(`http://localhost:5000/api/events/${id}`)
//       .then((res) => {
//         if (userData && Array.isArray(userData.events)) {
//           const registeredEventIds = userData.events.map((e) =>
//             e._id?.toString()
//           );
//           if (registeredEventIds.includes(id)) {
//             setIsRegistered(true);
//           }
//         }
//         if (!res.ok) throw new Error("Failed to fetch event data.");
//         return res.json();
//       })
//       .then((data) => setEvent(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, [userData, id]);

//   // const handleRegister = async () => {
//   //   if (!userData || !userData._id) {
//   //     toast.error("Please log in to register for this event.");
//   //     return;
//   //   }

//   //   try {
//   //     const res = await fetch(`${backendUrl}/api/users/register-event`, {
//   //       method: "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       credentials: "include",
//   //       body: JSON.stringify({ eventId: id }),
//   //     });

//   //     if (!res.ok) throw new Error("Failed to register for the event.");

//   //     toast.success("Registered successfully!");
//   //     setIsRegistered(true);
//   //   } catch (err) {
//   //     toast.error(err.message);
//   //   }
//   // };
//   const handleRegister = async () => {
//     if (!userData || !userData._id) {
//       toast.error("Please log in to register for this event.");
//       return;
//     }

//     try {
//       const res = await fetch(`${backendUrl}/api/user/register-event`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify({ eventId: id }),
//       });

//       if (!res.ok) throw new Error("Failed to register for the event.");

//       toast.success("Registered successfully!");
//       setIsRegistered(true);
//     } catch (err) {
//       toast.error(err.message);
//     }
//   };

//   if (loading)
//     return <p className="text-center my-5">Loading event details...</p>;
//   if (error) return <p className="text-center text-danger my-5">{error}</p>;
//   if (!event) return null;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: -20 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container my-5">
//         <h2 className="mb-4">
//           Know More About{" "}
//           <span className="text-primary">{event.event_title}</span>
//         </h2>

//         {event.banner && (
//           <div className="text-center mb-4">
//             <img
//               src={event.banner}
//               alt={event.event_title || "Event banner"}
//               className="img-fluid rounded shadow"
//               style={{ maxHeight: "400px" }}
//             />
//           </div>
//         )}

//         <h4>{event.event_title}</h4>
//         <p className="text-muted">{event.description}</p>

//         <h5 className="mt-4">
//           Meet our famous artist <strong>{event.artist_name}</strong> and our{" "}
//           <strong>{event.organized_by}</strong> (organizers) at the event.
//         </h5>

//         {event.artist_bio && (
//           <p className="fst-italic">About artist: {event.artist_bio}</p>
//         )}

//         <ul className="list-unstyled mt-3">
//           {event.event_date?.start && event.event_date?.end ? (
//             <li>
//               <strong>Date:</strong>{" "}
//               {new Date(event.event_date.start).toLocaleString("en-IN", {
//                 dateStyle: "full",
//                 timeZone: "Asia/Kolkata",
//               })}{" "}
//               -{" "}
//               {new Date(event.event_date.end).toLocaleString("en-IN", {
//                 dateStyle: "full",
//                 timeZone: "Asia/Kolkata",
//               })}
//             </li>
//           ) : (
//             <li>
//               <strong>Date:</strong> Not specified
//             </li>
//           )}
//           <li>
//             <strong>Time:</strong> {event.event_time || "N/A"}
//           </li>
//           <li>
//             <strong>Location:</strong> {event.location || "N/A"}
//           </li>
//           <li>
//             <strong>Special Activity for you:</strong> {event.activity || "N/A"}
//           </li>
//           <li>
//             <strong>Event Status:</strong> {event.status || "N/A"}
//           </li>
//           <li>
//             <strong>Price:</strong> {event.price || "Free"}
//           </li>
//         </ul>

//         {event.testimonials?.length > 0 && (
//           <div className="mt-4">
//             <h5>Testimonials</h5>
//             {event.testimonials.map((t, idx) => (
//               <div key={idx} className="border p-3 mb-2 rounded bg-light">
//                 <strong>{t.name}</strong> – <em>{t.rating}⭐</em>
//                 <p>{t.comment}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {event.images?.length > 0 && (
//           <div className="mt-4">
//             <h5>Event Gallery</h5>
//             <div className="row">
//               {event.images.map((img, idx) => (
//                 <div className="col-md-4 mb-3" key={idx}>
//                   <img
//                     src={img}
//                     alt={`event-gallery-${idx}`}
//                     className="img-fluid rounded shadow"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {event.videos?.length > 0 && (
//           <div className="mt-4">
//             <h5>Event Video</h5>
//             {event.videos.map((video, idx) => (
//               <video key={idx} className="w-100 mb-3 rounded shadow" controls>
//                 <source src={video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ))}
//           </div>
//         )}

//         {event.status === "Upcoming" ? (
//           <div className="text-center mt-4">
//             <button
//               className="btn btn-warning"
//               onClick={handleRegister}
//               disabled={isRegistered}
//             >
//               {isRegistered ? "Already Registered" : "Register Here"}
//             </button>
//           </div>
//         ) : (
//           <div className="text-center mt-4">
//             <button className="btn btn-warning" disabled>
//               Completed
//             </button>
//           </div>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default ShowEvent;

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./Events.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "../context/AppContext";

const ShowEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const { userData, backendUrl, isLoggedin, getUserData } =
    useContext(AppContent);

  useEffect(() => {
    fetch(`${backendUrl}/api/events/${id}`)
      .then((res) => {
        if (userData && Array.isArray(userData.events)) {
          const registeredEventIds = userData.events.map((e) =>
            e._id?.toString()
          );
          if (registeredEventIds.includes(id)) {
            setIsRegistered(true);
          }
        }
        if (!res.ok) throw new Error("Failed to fetch event data.");
        return res.json();
      })
      .then((data) => setEvent(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [userData, id, backendUrl]);

  const handleRegister = async () => {
    if (!isLoggedin) {
      toast.error("Please log in to register for this event.");
      return;
    }

    if (!userData?.isAccountVerified) {
      toast.warning("Please verify your email before registering for events.");
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/api/user/register-event`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ eventId: id }),
      });

      if (!res.ok) throw new Error("Failed to register for the event.");

      toast.success("Registered successfully!");
      setIsRegistered(true);
      getUserData(); // refresh user data so it persists after refresh
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading)
    return <p className="text-center my-5">Loading event details...</p>;
  if (error) return <p className="text-center text-danger my-5">{error}</p>;
  if (!event) return null;

  const getButtonLabel = () => {
    if (isRegistered) return "Already Registered";
    if (!isLoggedin) return "Login to Register";
    if (!userData?.isAccountVerified) return "Verify Email to Register";
    return "Register Here";
  };

  const isButtonDisabled =
    isRegistered || !isLoggedin || !userData?.isAccountVerified;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container my-5">
        <h2 className="mb-4">
          Know More About{" "}
          <span className="text-primary">{event.event_title}</span>
        </h2>

        {event.banner && (
          <div className="text-center mb-4">
            <img
              src={event.banner}
              alt={event.event_title || "Event banner"}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>
        )}

        <h4>{event.event_title}</h4>
        <p className="text-muted">{event.description}</p>

        <h5 className="mt-4">
          Meet our famous artist <strong>{event.artist_name}</strong> and our{" "}
          <strong>{event.organized_by}</strong> (organizers) at the event.
        </h5>

        {event.artist_bio && (
          <p className="fst-italic">About artist: {event.artist_bio}</p>
        )}

        <ul className="list-unstyled mt-3">
          {event.event_date?.start && event.event_date?.end ? (
            <li>
              <strong>Date:</strong>{" "}
              {new Date(event.event_date.start).toLocaleString("en-IN", {
                dateStyle: "full",
                timeZone: "Asia/Kolkata",
              })}{" "}
              -{" "}
              {new Date(event.event_date.end).toLocaleString("en-IN", {
                dateStyle: "full",
                timeZone: "Asia/Kolkata",
              })}
            </li>
          ) : (
            <li>
              <strong>Date:</strong> Not specified
            </li>
          )}
          <li>
            <strong>Time:</strong> {event.event_time || "N/A"}
          </li>
          <li>
            <strong>Location:</strong> {event.location || "N/A"}
          </li>
          <li>
            <strong>Special Activity for you:</strong> {event.activity || "N/A"}
          </li>
          <li>
            <strong>Event Status:</strong> {event.status || "N/A"}
          </li>
          <li>
            <strong>Price:</strong> {event.price || "Free"}
          </li>
        </ul>

        {event.testimonials?.length > 0 && (
          <div className="mt-4">
            <h5>Testimonials</h5>
            {event.testimonials.map((t, idx) => (
              <div key={idx} className="border p-3 mb-2 rounded bg-light">
                <strong>{t.name}</strong> – <em>{t.rating}⭐</em>
                <p>{t.comment}</p>
              </div>
            ))}
          </div>
        )}

        {event.images?.length > 0 && (
          <div className="mt-4">
            <h5>Event Gallery</h5>
            <div className="row">
              {event.images.map((img, idx) => (
                <div className="col-md-4 mb-3" key={idx}>
                  <img
                    src={img}
                    alt={`event-gallery-${idx}`}
                    className="img-fluid rounded shadow"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {event.videos?.length > 0 && (
          <div className="mt-4">
            <h5>Event Video</h5>
            {event.videos.map((video, idx) => (
              <video key={idx} className="w-100 mb-3 rounded shadow" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        )}

        {event.status === "Upcoming" ? (
          <div className="text-center mt-4">
            <button
              className="btn btn-warning"
              onClick={handleRegister}
              disabled={isButtonDisabled}
            >
              {getButtonLabel()}
            </button>
          </div>
        ) : (
          <div className="text-center mt-4">
            <button className="btn btn-warning" disabled>
              Completed
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ShowEvent;
