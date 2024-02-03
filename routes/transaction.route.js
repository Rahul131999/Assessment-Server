import express from 'express';
import { getTransactionsOfAccount } from '../controllers/transaction.controller.js';

const router = express.Router();

router.get('/:accountId', getTransactionsOfAccount);

export default router;