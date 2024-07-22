import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSetting } from "./hooks.js";

const income_expensesSchema = new Schema({
  name: String,
  amount: Number,
  type: String,
});

const statisticSchema = new Schema(
  {
    suppliers: Number,

    income_expenses: [income_expensesSchema],
    all_customers: Number,
  },
  { versionKey: false }
);

statisticSchema.post("save", handleSaveError);
statisticSchema.pre("findOneAndUpdate", setUpdateSetting);
statisticSchema.post("findOneAndUpdate", handleSaveError);

const Statistic = model("statistic", statisticSchema);

export default Statistic;
