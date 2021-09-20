const router = require('express').Router();
const { getTransactions, addTranscation, deleteTransaction } = require('../controllers/transactions');

router
  .route('/')
  .get(getTransactions)
  .post(addTranscation);

router
  .route('/:id')
  .delete(deleteTransaction);

module.exports = router;