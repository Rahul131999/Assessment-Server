import Customer from "../models/customer.model.js";

export const getActiveCustomers = async (req, res) => {
  try {
    const activeUsers = await Customer.find(
      { active: true },
      "name accounts address"
    );
    res.json(activeUsers);
  } catch (error) {
    console.log("error", error);
  }
};