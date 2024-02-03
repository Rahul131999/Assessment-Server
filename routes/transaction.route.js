import express from 'express';
import { getTransactionsOfAccount } from '../controllers/transaction.controller.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/:accountId',verifyToken, getTransactionsOfAccount);

export default router;