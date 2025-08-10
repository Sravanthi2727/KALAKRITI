// import { AnimatePresence } from 'framer-motion';
// import { useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from "./Components/CartContext";
// import { WishlistProvider } from './Components/WishlistContext';
// import CartPage from "./Components/CartPage";
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// // import Category from './Components/Category';
// import Footer from './Components/Footer';
// import LoginRegister from './Components/LoginRegister';
// import UploadArt from './Components/UploadArt';
// import TraditionalPaintings from './Components/TraditionalPaintings';
// import WishlistPage from './Components/WishlistPage';
// import FolkDances from './Components/FolkDances';
// import Artists from './Components/Artists';
// import Handicrafts from './Components/Handicrafts';
// import Gallery from './Components/Gallery';
// import UpcomingEvents from './Components/UpcomingEvents';
// import CompletedEvents from './Components/CompletedEvents';
// import ShowEvent from './Components/ShowEvent';
// import Events from './Components/Events';
// import Aboutus from './Components/Aboutus';
// import ContactUs from './Components/ContactUs';
// import Header from './Components/Header';
// // Auth pages
// //import Login from './pages/Login';
// import EmailVerify from './pages/EmailVerify';
// import ResetPassword from './pages/ResetPassword';




// function AppWrapper() {
//   return (
//     <CartProvider>
//       <WishlistProvider>
//         <Router>
//           <App />
//         </Router>
//       </WishlistProvider>
//     </CartProvider>
//   );
// }

// function App() {
//   const location = useLocation();
//   return (
//     // <CartProvider>
//     //   <WishlistProvider>
//     //     <Router>

//       <div className="app-container d-flex flex-column min-vh-100">
//       <div className="logo">
//         <img src="/logo4.png" alt='logo' />
//         <Header />
//       </div>

//       <Navbar title="KALAKRITI" />

//       {/* Login modal remains outside Routes */}
//       <div
//         className="modal fade"
//         id="loginModal"
//         tabIndex="-1"
//         aria-labelledby="loginModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content p-4" style={{ background: '#920024' }}>
//             <button
//               type="button"
//               className="btn-close align-self-end"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//             <LoginRegister />
//           </div>
//         </div>
//       </div>

//       <main className="flex-grow-1 page-content">
//       <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<><Home /></>} />
//         <Route path="/upload" element={<UploadArt />} />
//         <Route path="/helpline" element={<div>Contact Page Coming Soon</div>} />
//         <Route path="/arts/paintings" element={<TraditionalPaintings />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/wishlist" element={<WishlistPage/>} />
//         <Route path="/arts/dances" element={<FolkDances />} />
//         <Route path="arts/handicrafts" element={<Handicrafts />} />
//         <Route path="arts/gallery" element={<Gallery />} />
//         <Route path="/artists" element={<Artists />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/events/upcoming" element={<UpcomingEvents />} />
//         <Route path="/events/completed" element={<CompletedEvents />} />
//         <Route path="/events/:id" element={<ShowEvent />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/contactus" element={<ContactUs />} />
//       </Routes>
//       </AnimatePresence>
//       </main>

//        <Footer />
//         </div>
//   );
// }

// export default AppWrapper;

// function App() {
//   const location = useLocation();

//   return (
//     <div className="app-container d-flex flex-column min-vh-100">
//       <ToastContainer />
//       <div className="logo">
//         <img src="/logo4.png" alt="logo" />
//         <Header />
//       </div>

//       <Navbar title="KALAKRITI" />

//       <main className="flex-grow-1 page-content">
//         <AnimatePresence mode="wait">
//           <Routes location={location} key={location.pathname}>
//             <Route path="/" element={<Home />} />
//             <Route path="/upload" element={<UploadArt />} />
//             <Route path="/arts/paintings" element={<TraditionalPaintings />} />
//             <Route path="/arts/dances" element={<FolkDances />} />
//             <Route path="/arts/handicrafts" element={<Handicrafts />} />
//             <Route path="/arts/gallery" element={<Gallery />} />
//             <Route path="/wishlist" element={<WishlistPage />} />
//             <Route path="/cart" element={<CartPage />} />
//             <Route path="/artists" element={<Artists />} />
//             <Route path="/events" element={<Events />} />
//             <Route path="/events/upcoming" element={<UpcomingEvents />} />
//             <Route path="/events/completed" element={<CompletedEvents />} />
//             <Route path="/events/:id" element={<ShowEvent />} />
//             <Route path="/aboutus" element={<Aboutus />} />
//             <Route path="/contactus" element={<ContactUs />} />
//             <Route path="/helpline" element={<div>Contact Page Coming Soon</div>} />
//             {/* 🔐 Auth routes */}
//             <Route path="/login" element={<LoginRegister />} />
//             <Route path="/email-verify" element={<EmailVerify />} />
//             <Route path="/reset-password" element={<ResetPassword />} />
//           </Routes>
//         </AnimatePresence>
//       </main>

//       <Footer />
//     </div>
//   );
// }
// export default App;
/*----------------------------------------------------------------------------------------*/


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { CartProvider } from "./Components/CartContext";
// import { WishlistProvider } from './Components/WishlistContext';
// import CartPage from "./Components/CartPage";
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// // import Category from './Components/Category';
// import Footer from './Components/Footer';
// import LoginRegister from './Components/LoginRegister';
// import UploadArt from './Components/UploadArt';
// import TraditionalPaintings from './Components/TraditionalPaintings';
// import WishlistPage from './Components/WishlistPage';
// import FolkDances from './Components/FolkDances';
// import Artists from './Components/Artists';
// import Handicrafts from './Components/Handicrafts';
// import Gallery from './Components/Gallery';
// import UGallery from './Components/UGallery'; 
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// //import Header from './Components/Header';
// import AnimatedRoutes from './Components/AnimatedRoutes';

// function App() {
//   return (
//     <div className="app-container d-flex flex-column min-vh-100">
//       <ToastContainer />
//       <div className="logo">
//         <img src="/logo4.png" alt="logo" />
//         {/* <Header /> */}
//       </div>

//       <Navbar title="KALAKRITI" />

//       <main className="flex-grow-1 page-content3">
//         <AnimatedRoutes />
//       </main>
//       {/* Login modal remains outside Routes */}
//       <div
//         className="modal fade"
//         id="loginModal"
//         tabIndex="-1"
//         aria-labelledby="loginModalLabel"
//         aria-hidden="true"
//       >
//         <div className="modal-dialog modal-dialog-centered">
//           <div className="modal-content p-4" style={{ background: '#920024' }}>
//             <button
//               type="button"
//               className="btn-close align-self-end"
//               data-bs-dismiss="modal"
//               aria-label="Close"
//             ></button>
//             <LoginRegister />
//           </div>
//         </div>
//       </div>
//       <div className="flex-grow-1">
//       <Routes>
//         <Route path="/" element={<><Home /></>} />
//         <Route path="/upload" element={<UploadArt />} />
//         <Route path="/upload/gallery" element={<UGallery />} />

//         <Route path="/helpline" element={<div>Contact Page Coming Soon</div>} />
//         {/* Add other routes as needed */}
//         <Route path="/arts/paintings" element={<TraditionalPaintings />} />
//         <Route path="/cart" element={<CartPage />} />
//         <Route path="/wishlist" element={<WishlistPage/>} />
//         <Route path="/arts/dances" element={<FolkDances />} />
//         <Route path="arts/handicrafts" element={<Handicrafts />} />
//         <Route path="arts/gallery" element={<Gallery />} />
//         <Route path="/artists" element={<Artists />} />
//       </Routes>
//       </div>

//       <Footer />
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router } from 'react-router-dom';
// import { CartProvider } from "./Components/CartContext";
// import { WishlistProvider } from './Components/WishlistContext';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import LoginRegister from './Components/LoginRegister';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import AnimatedRoutes from './Components/AnimatedRoutes';

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <WishlistProvider>
//           <div className="app-container d-flex flex-column min-vh-100">
//             <ToastContainer />

//             {/* Logo */}
//             <div className="logo">
//               <img src="/logo4.png" alt="logo" />
//             </div>

//             {/* Navbar */}
//             <Navbar title="KALAKRITI" />

//             {/* Main Content with Routing */}
//             <main className="flex-grow-1 page-content3">
//               <AnimatedRoutes />
//             </main>

//             {/* Login Modal */}
//             <div
//               className="modal fade"
//               id="loginModal"
//               tabIndex="-1"
//               aria-labelledby="loginModalLabel"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog modal-dialog-centered">
//                 <div className="modal-content p-4" style={{ background: '#920024' }}>
//                   <button
//                     type="button"
//                     className="btn-close align-self-end"
//                     data-bs-dismiss="modal"
//                     aria-label="Close"
//                   ></button>
//                   <LoginRegister />
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <Footer />
//           </div>
//         </WishlistProvider>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;




import { CartProvider } from "./Components/CartContext";
import { WishlistProvider } from './Components/WishlistContext';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginRegister from './Components/LoginRegister';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AnimatedRoutes from './Components/AnimatedRoutes';

function App() {
  return (
    <div className="app-container d-flex flex-column min-vh-100">
      <ToastContainer />

      {/* Logo */}
      <div className="logo">
        <img src="/logo4.png" alt="logo" />
      </div>

      {/* Navbar */}
      <Navbar title="KALAKRITI" />

      {/* Main Content with Routing */}
      <main className="flex-grow-1 page-content3">
        <AnimatedRoutes />
      </main>

      {/* Login Modal */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4" style={{ background: '#920024' }}>
            <button
              type="button"
              className="btn-close align-self-end"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <LoginRegister />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
