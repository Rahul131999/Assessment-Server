import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  username: String,
  name: String,
  address: String,
  birthdate: Date,
  email: String,
  active: Boolean,
  accounts: [Number],
  tier_and_details: {
    type: {
      tier: String,
      id: String,
      active: Boolean,
      benefits: [String],
    },
    default: {},
  },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;