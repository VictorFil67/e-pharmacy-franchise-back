import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const contactSchema = new Schema(
  {
    shopName: {
      type: String,
      required: [true, "Set name for contact"],
    },
    shopOwnerName: {
      type: String,
    },
    shopEmail: {
      type: String,
    },
    shopPhone: {
      type: String,
    },
    shopStreet: {
      type: String,
    },
    shopCity: {
      type: String,
    },
    shopZip: {
      type: String,
    },
    password: {
      type: String,
      minlength: [8, "Password mast have at least 8 characters"],
      required: [true, "Password is required"],
    },
    shopOwnDelivery: {
      type: String,
      // default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

contactSchema.post("save", handleSaveError);
contactSchema.pre("findOneAndUpdate", setUpdateSetting);
contactSchema.post("findOneAndUpdate", handleSaveError);

const Contact = model("contact", contactSchema);

export default Contact;
