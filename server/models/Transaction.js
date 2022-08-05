const Mongoose = require("mongoose");

const TransactionSchema = new Mongoose.Schema(
  {
    text: String,
    amount: Number,
    type: {
      type: String,
      default: "expense",
      enum: ["income", "expense"],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Mongoose.model("transaction", TransactionSchema);
