import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const shopSchema = new Schema(
  {
    shopName: {
      type: String,
      required: [true, "Set name for shop"],
    },
    shopOwnerName: {
      type: String,
      required: [true, "Owner name is required"],
    },
    shopEmail: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    shopPhone: {
      type: String,
      required: [true, "Phone is required"],
    },
    shopStreet: {
      type: String,
      required: [true, "Street Address is required"],
    },
    shopCity: {
      type: String,
      required: [true, "City is required"],
    },
    shopZip: {
      type: String,
      required: [true, "Zip/Postal is required"],
    },
    password: {
      type: String,
      minlength: [8, "Password mast have at least 8 characters"],
      required: [true, "Password is required"],
    },
    shopOwnDelivery: {
      type: String,
      enum: ["Yes", "No"],
      default: "Yes",
    },
    shopLogoURL: { type: String },
    // owner: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    // },
  },
  { versionKey: false }
);

shopSchema.post("save", handleSaveError);
shopSchema.pre("findOneAndUpdate", setUpdateSetting);
shopSchema.post("findOneAndUpdate", handleSaveError);

const Shop = model("shop", shopSchema);

export default Shop;
