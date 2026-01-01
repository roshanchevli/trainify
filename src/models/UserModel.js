import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    role: {
      type: String,
      enum: ["client", "trainer", "admin"],
      default: "client",
    },

    isApproved: {
      type: Boolean,
      default: false, // mainly for trainers
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

// Prevent model overwrite error in Next.js
export const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
