import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContent } from "../context/AppContext";
import { toast } from "react-toastify";
import Login from "./LoginRegister"; // ✅ import modal

export default function Navbar(props) {
  const [showArtsDropdown, setShowArtsDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ control login modal

  const toggleArtsDropdown = () => setShowArtsDropdown((prev) => !prev);
  const navigate = useNavigate();

  const { userData, backendUrl, setUserData, setIsLoggedin } =
    useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-verify-otp"
      );
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      if (data.success) {
        setIsLoggedin(false);
        setUserData(null);
        navigate("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{ backgroundColor: "#3E0B2C" }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand hover-orange"
            style={{ color: "#FF9D2F", fontFamily: "cursive" }}
            href="/"
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* 🔥 Arts Dropdown */}
              <li className="nav-item dropdown mx-3">
                <span
                  role="button"
                  className="nav-link dropdown-toggle fw-bold text-white hover-orange"
                  onClick={toggleArtsDropdown}
                  onMouseEnter={() => setShowArtsDropdown(true)}
                  onMouseLeave={() => setShowArtsDropdown(false)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-list me-2"></i> Arts
                </span>
                <ul
                  className={`dropdown-menu ${showArtsDropdown ? "show" : ""}`}
                  onMouseEnter={() => setShowArtsDropdown(true)}
                  onMouseLeave={() => setShowArtsDropdown(false)}
                >
                  <li>
                    <Link
                      className="dropdown-item hover-orange"
                      to="/arts/paintings"
                    >
                      Traditional Paintings
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover-orange"
                      to="/arts/dances"
                    >
                      Folk Dances
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover-orange"
                      to="/arts/handicrafts"
                    >
                      Handicrafts
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover-orange"
                      to="/arts/gallery"
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Other Links */}
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active fw-bold text-white hover-orange"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/aboutus"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/contactus"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/game"
                >
                  Games
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/upload"
                >
                  Upload
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/artists"
                >
                  Artists
                </Link>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle fw-bold text-white hover-orange"
                  href="#"
                  id="eventsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                  <li>
                    <Link
                      className="dropdown-item hover-orange"
                      to="/events/upcoming"
                    >
                      Upcoming Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item hover-orange"
                      to="/events/completed"
                    >
                      Completed Events
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/cart"
                >
                  Cart 🛒
                </Link>
              </li>
              {/* Dropdowns and nav links... (unchanged) */}
              <li className="nav-item mx-3">
                <Link
                  className="nav-link fw-bold text-white hover-orange"
                  to="/wishlist"
                >
                  Wishlist ❤
                </Link>
              </li>
            </ul>

            {userData ? (
              <div className="dropdown ms-3">
                <button
                  style={{ backgroundColor: "#FF9D2F", color: "white" }}
                  className="btn user-avatar-btn dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <b>{userData.name?.charAt(0).toUpperCase() || "U"}</b>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {/* {!userData.isAccountVerified && (
        <li>
          <button className="dropdown-item" onClick={sendVerificationOtp}>
            Verify Email
          </button>
        </li>
      )} */}
                  <li>
                    <button className="dropdown-item" onClick={logout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <button
                className="ms-2 btn btn-warning"
                type="button"
                style={{
                  padding: "2px 10px",
                  fontSize: "0.85rem",
                  height: "30px",
                }}
                onClick={() => setShowModal(true)}
              >
                <i className="bi bi-person-circle me-1"></i> Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ Show modal */}
      {showModal && <Login onClose={() => setShowModal(false)} />}
    </>
  );
}
