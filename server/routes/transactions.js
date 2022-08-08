const express = require("express");
const validate = require("../middlewares/validate");
const validationSchemas = require("../validations/Transaction");
const mongoose = require("mongoose");
const Transaction = require("../models/Transaction");
const httpStatus = require("http-status");

const router = express.Router();

router
  .route("/")
  .post(validate(validationSchemas.createValidation), (req, res, next) => {
    const addedTransaction = new Transaction(req.body);
    addedTransaction.save((err, doc) => {
      if (err) {
        return next({
          statusCode: httpStatus.BAD_REQUEST,
          message: "Transaction not added",
        });
      }
      return res.status(httpStatus.OK).json({
        success: true,
        data: {
          _id: doc._id,
          text: doc.text,
          amount: doc.amount,
          type: doc.type,
        },
        message: "Transaction added",
      });
    });
  });

router.route("/").get((req, res, next) => {
  Transaction.find({ isDeleted: false }, (err, data) => {
    if (err) {
      return next({
        statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        message: "Failed to fetch transactions",
      });
    }

    return res.status(httpStatus.OK).json({
      success: true,
      data: data.map((transaction) => {
        return {
          _id: transaction._id,
          text: transaction.text,
          amount: transaction.amount,
          type: transaction.type,
        };
      }),
    });
  });
});

router.route("/:id").delete((req, res, next) => {
  const { id } = req.params;
  console.log(id);
  Transaction.findOne({ _id: id }, (err, transaction) => {
    console.log(transaction, "1");
    if (err) {
      next({
        statusCode: httpStatus.NOT_FOUND,
        message: "Transaction not found",
      });
    }
    console.log(transaction, "2");
    if (!transaction.isDeleted) {
      Transaction.updateOne({ _id: id }, { isDeleted: true }, (err) => {
        if (err) {
          next({
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Transaction not deleted",
          });
        }
        console.log(transaction, "3");
        return res.status(httpStatus.OK).json({
          message: "Transaction is deleted",
          success: true,
        });
      });
    }
    console.log(transaction, "3");
    next({
      statusCode: httpStatus.NOT_FOUND,
      message: "Transaction not found",
    });
  });
});

module.exports = router;
