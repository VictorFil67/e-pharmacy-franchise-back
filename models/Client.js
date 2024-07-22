import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const clientSchema = new Schema(
  {
    image: String,
    name: String,
    email: String,
    spent: Number,
    phone: String,
    address: String,
    register_date: String,
  },
  { versionKey: false }
);

clientSchema.post("save", handleSaveError);
clientSchema.pre("findOneAndUpdate", setUpdateSetting);
clientSchema.post("findOneAndUpdate", handleSaveError);

const Client = model("client", clientSchema);

export default Client;
