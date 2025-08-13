export default function userController(User) {
  return {
    // GET /api/user/data
    getUserData: async (req, res) => {
      try {
        const userId = req.userId;
        if (!userId) {
          return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const user = await User.findById(userId).populate("events");
        if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({
          success: true,
          userData: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAccountVerified: user.isAccountVerified,
            cart: Array.isArray(user.cart) ? user.cart : [],
            wishlist: Array.isArray(user.wishlist) ? user.wishlist : [],
            events: Array.isArray(user.events) ? user.events : [],
            orders: Array.isArray(user.orders) ? user.orders : [],
          },
        });
      } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
      }
    },

    // POST /api/user/cart
    setCart: async (req, res) => {
      try {
        const userId = req.userId;
        const { cart } = req.body;
        if (!Array.isArray(cart)) {
          return res.status(400).json({ success: false, message: "cart must be an array" });
        }
        const user = await User.findByIdAndUpdate(
          userId,
          { $set: { cart } },
          { new: true }
        );
        return res.json({ success: true, cart: user.cart });
      } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
      }
    },

    // POST /api/user/wishlist
    setWishlist: async (req, res) => {
      try {
        const userId = req.userId;
        const { wishlist } = req.body;
        if (!Array.isArray(wishlist)) {
          return res.status(400).json({ success: false, message: "wishlist must be an array" });
        }
        const user = await User.findByIdAndUpdate(
          userId,
          { $set: { wishlist } },
          { new: true }
        );
        return res.json({ success: true, wishlist: user.wishlist });
      } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
      }
    },

    // POST /api/user/register-event
    registerForEvent: async (req, res) => {
      try {
        const userId = req.userId;
        const { eventId } = req.body;
        if (!eventId) {
          return res.status(400).json({ success: false, message: "eventId is required" });
        }
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const already = user.events?.some((e) => String(e) === String(eventId));
        if (already) {
          return res.json({ success: true, message: "Already registered", events: user.events });
        }
        user.events.push(eventId);
        await user.save();
        return res.json({ success: true, message: "Registered for event", events: user.events });
      } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
      }
    },

    // POST /api/user/order
    placeOrder: async (req, res) => {
      try {
        const userId = req.userId;
        const { items } = req.body; // optional override
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ success: false, message: "User not found" });

        const orderItems = Array.isArray(items) ? items : user.cart || [];
        const total = orderItems.reduce((sum, it) => sum + (Number(it.price) || 0), 0);

        const order = {
          id: `ord_${Date.now()}`,
          items: orderItems,
          total,
          placedAt: Date.now(),
          status: "PLACED",
        };

        user.orders = [...(user.orders || []), order];
        user.cart = [];
        await user.save();

        return res.json({ success: true, order, cart: user.cart, orders: user.orders });
      } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
      }
    },
  };
}