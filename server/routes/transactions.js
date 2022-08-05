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
        next({
          statusCode: httpStatus.BAD_REQUEST,
          message: "Transaction not added",
        });
      }
      res.status(httpStatus.OK).json({
        success: true,
        data: doc,
        message: "Transaction added",
      });
    });
  });

router.route("/").get((req, res, next) => {});

module.exports = router;
