import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for medicine"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    suppliers: {
      type: String,
    },
    stock: {
      type: Number,
    },
    category: {
      type: String,
    },
    photo: { type: String },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "shop",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

productSchema.post("save", handleSaveError);
productSchema.pre("findOneAndUpdate", setUpdateSetting);
productSchema.post("findOneAndUpdate", handleSaveError);

const Product = model("product", productSchema);

export default Product;
