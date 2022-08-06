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
  Transaction.findOne({ _id: id }, (err, transaction) => {
    if (err) {
      return next({
        statusCode: httpStatus.NOT_FOUND,
        message: "Transaction not found",
      });
    }

    if (!transaction.isDeleted) {
      transaction.isDeleted = true;
      transaction.save((err) => {
        if (err) {
          return next({
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            message: "Transaction not deleted",
          });
        }
        return res.status(httpStatus.OK).json({
          message: "Transaction is deleted",
          success: true,
        });
      });
    }

    return next({
      statusCode: httpStatus.NOT_FOUND,
      message: "Transaction not found",
    });
  });
});

module.exports = router;
