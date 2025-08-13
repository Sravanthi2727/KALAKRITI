import React, { useState } from "react";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const [removedItemId, setRemovedItemId] = useState(null);

  const handleRemove = (item) => {
    removeFromCart(item);
    setRemovedItemId(item.id);
    setTimeout(() => setRemovedItemId(null), 2000);
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );
  const totalItems = cartItems.length;

  return (
    <div className="cart-page">
      <h2>Your Cart 🛒</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-summary">
            <p>
              <strong>Total Items:</strong> {totalItems}
            </p>
            <p>
              <strong>Total Amount:</strong> ₹{totalAmount}
            </p>
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#paymentModal"
            >
              Buy Now
            </button>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p>
                    <strong>₹{item.price}</strong>
                  </p>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </button>
                  {removedItemId === item.id && (
                    <div className="remove-message text-danger mt-1">
                      ❌ Removed from cart!
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Payment Modal */}
      <div
        className="modal fade"
        id="paymentModal"
        tabIndex="-1"
        aria-labelledby="paymentModalLabel"
        aria-hidden="true"
      
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content p-4"
            style={{ backgroundColor: "#3E0B2C", color: "#FF9D2F"}}
          >
            <h5 className="modal-title mb-3" id="paymentModalLabel">
              Payment
            </h5>
            <form>
              <div className="mb-3">
                <label className="form-label"> Name</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea className="form-control" rows="2" required></textarea>
              </div>
              <div class="input-group mb-3">
                <input type="number" class="form-control" placeholder="Mobile Number" aria-label="Username"/>
                <span class="input-group-text"></span>
                <input type="number" class="form-control" placeholder="Pincode" aria-label="Server"/>
              </div>
              {/* Payment Details */}
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  maxLength="16"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Expiry Date</label>
                <input type="month" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">CVV</label>
                <input
                  type="password"
                  className="form-control"
                  maxLength="3"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                style={{ backgroundColor: "#FF9D2F" }}
                onClick={(e) => {
                  toast.success("✅ Payment successful!");
                }}
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
