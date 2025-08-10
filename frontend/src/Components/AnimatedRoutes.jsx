


import { AnimatePresence } from "framer-motion";
import { useLocation, Routes, Route } from "react-router-dom";

import Home from './Home';
import UploadArt from './UploadArt';
import TraditionalPaintings from './TraditionalPaintings';
import FolkDances from './FolkDances';
import Handicrafts from './Handicrafts';
import Gallery from './Gallery';
import WishlistPage from './WishlistPage';
import CartPage from './CartPage';
import Artists from './Artists';
import Events from './Events';
import UpcomingEvents from './UpcomingEvents';
import CompletedEvents from './CompletedEvents';
import ShowEvent from './ShowEvent';
import Aboutus from './Aboutus';
import ContactUs from './ContactUs';
import EmailVerify from '../pages/EmailVerify';
import Games from "./Games";
import SandL from "./SandL";
import TraditionalArtPuzzle from "./TraditionalArtPuzzle";
import IndianArtGame from "./IndianArtGame";
import Jumbleword from "./Jumbleword";
import UGallery from './UGallery';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<UploadArt />} />
        <Route path="/upload/gallery" element={<UGallery />} />
        <Route path="/arts/paintings" element={<TraditionalPaintings />} />
        <Route path="/arts/dances" element={<FolkDances />} />
        <Route path="/arts/handicrafts" element={<Handicrafts />} />
        <Route path="/arts/gallery" element={<Gallery />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />
        <Route path="/events/completed" element={<CompletedEvents />} />
        <Route path="/events/:id" element={<ShowEvent />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/email-verify" element={<EmailVerify />} />
        <Route path="/game" element={<Games />} />
        <Route path="/games/memory" element={<IndianArtGame />} />
        <Route path="/games/SandL" element={<SandL />} />
        <Route path="/games/puzzle" element={<TraditionalArtPuzzle />} />
        <Route path="/games/quiz" element={<Jumbleword />} />
      </Routes>
    </AnimatePresence>
  );
}
