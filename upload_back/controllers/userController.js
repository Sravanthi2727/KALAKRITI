


export default function userController(User) {
  return {
    getUserData: async (req, res) => {
      try {
        const userId = req.userId;

        if (!userId) {
          return res.status(401).json({ success: false, message: "Unauthorized" });
        }

        const user = await User.findById(userId);

        if (!user) {
          return res.status(404).json({ success: false, message: "User not found" });
        }

        return res.status(200).json({
          success: true,
          userData: {
            name: user.name,
            isAccountVerified: user.isAccountVerified,
          },
        });
      } catch (e) {
        return res.status(500).json({ success: false, message: e.message });
      }
    },
  };
}
