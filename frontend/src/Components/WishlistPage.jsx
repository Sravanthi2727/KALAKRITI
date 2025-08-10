import React, { useState } from "react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { motion } from "framer-motion";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleMoveToCart = (item) => {
    addToCart(item);
    removeFromWishlist(item.id);
    setToast({ show: true, message: "✅ Moved to Cart!", type: "success" });

    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="wishlist-page container mt-4">
        {/* ✅ Toast Notification */}
        {toast.show && (
          <div className={`global-toast ${toast.type}`}>{toast.message}</div>
        )}

        <h2>My Wishlist ❤</h2>
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="row">
            {wishlistItems.map((item) => (
              <div key={item.id} className="col-md-4 mb-4">
                <div className="card h-100 shadow">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p>
                      <strong>₹{item.price}</strong>
                    </p>
                    <button
                      className="btn btn-success me-2"
                      onClick={() => handleMoveToCart(item)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
