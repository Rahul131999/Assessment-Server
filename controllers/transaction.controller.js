import Transaction from "../models/transaction.model.js";

export const getTransactionsOfAccount = async (req, res) => {
  try {

    const { accountId } = req.params;

    const result = await Transaction.findOne(
      { account_id: accountId },
      { transactions: 1 }
    );

    const transactions = result ? result.transactions : [];

    res.status(200).json(transactions);

  } catch (error) {
    console.log("error", error);
  }
};