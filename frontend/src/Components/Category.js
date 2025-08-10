
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Offcanvas, Button } from 'react-bootstrap';

// export default function Category() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       {/* Trigger Button */}
//       <Button variant="outline-light" className="fw-bold" onClick={handleShow}>
//         <i className="bi bi-list me-2"></i> Arts
//       </Button>

//       {/* Offcanvas */}
//       <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="start">
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title style={{ color: 'black' }}>Traditional Arts of India</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <p className="fw-bold" style={{ color: 'black' }}>
//             Explore various traditional arts by category:
//           </p>
//           <ul className="list-unstyled">
//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link
//                 to="/arts/paintings"
//                 className="text-decoration-none text-light fw-bold"
//                 onClick={handleClose}
//               >
//                 Traditional Paintings
//               </Link>
//             </li>

//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link
//                 to="/arts/dance"
//                 className="text-decoration-none text-light fw-medium"
//                 onClick={handleClose}
//               >
//                 Folk Dances
//               </Link>
//             </li>

//             <li className="border p-2 my-2 rounded" style={{ backgroundColor: '#E7621B' }}>
//               <Link
//                 to="/arts/handicrafts"
//                 className="text-decoration-none text-light fw-medium"
//                 onClick={handleClose}
//               >
//                 Handicrafts
//               </Link>
//             </li>
//           </ul>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

