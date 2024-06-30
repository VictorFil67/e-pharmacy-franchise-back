import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: [8, "Password mast have at least 8 characters"],
      required: [true, "Password is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone nomber is required"],
    },
    token: {
      type: String,
      default: null,
    },
    refreshToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveError);
userSchema.pre("findOneAndUpdate", setUpdateSetting);
userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;
