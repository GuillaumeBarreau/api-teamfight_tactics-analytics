var database = require('./composition.dao');
const httpStatus = require('http-status-codes');
const APIError = require('../../../helpers/APIError');

exports.create = async function (req, res, next) {

  database.create(req.body, function (err, result) {
    let error = null;

    if (err) {
      error = {
        status: 'BAD_REQUEST',
        message: 'Bad Request'
      }
    } else if (!result) {
      error = {
        status: 'NOT_FOUND',
        message: 'Data not Found'
      }
    }

    (error)
      ?
      res.json(new APIError(error.message, httpStatus[error.status], true))
      :
      res.json(result)
  })
}

exports.list = function (req, res, next) {

  let config = {
    query: {},
    limit: 100 || req.query.limit
  };

  database.get(config, function (err, result) {

    let error = null;

    if (err) {
      error = {
        status: 'BAD_REQUEST',
        message: 'Bad Request'
      }
    } else if (!result) {
      error = {
        status: 'NOT_FOUND',
        message: 'Data not Found'
      }
    }

    (error)
      ?
      res.json(new APIError(error.message, httpStatus[error.status], true))
      :
      res.json(result)

  })
}

exports.unique = function (req, res, next) {

  let config = {
    query: { _id: req.params.id }
  };

  database.unique(config, function (err, result) {

    let error = null;

    if (err) {
      error = {
        status: 'BAD_REQUEST',
        message: 'Bad Request'
      }
    } else if (!result) {
      error = {
        status: 'NOT_FOUND',
        message: 'Data not Found'
      }
    }

    (error)
      ?
      res.json(new APIError(error.message, httpStatus[error.status], true))
      :
      res.json(result)
  })
}

exports.update = function (req, res, next) {

  let config = {
    query: { _id: req.params.id }
  };

  database.update(config, req.body, function (err, result) {

    let error = null;

    if (err) {
      error = {
        status: 'BAD_REQUEST',
        message: 'Bad Request'
      }
    } else if (!result) {
      error = {
        status: 'NOT_FOUND',
        message: 'Data not Found'
      }
    }

    (error)
      ?
      res.json(new APIError(error.message, httpStatus[error.status], true))
      :
      res.json(result)

  })
}

exports.remove = function (req, res, next) {

  let config = {
    query: { _id: req.params.id }
  };

  database.delete(config, function (err, result) {

    let error = null;

    if (err) {
      error = {
        status: 'BAD_REQUEST',
        message: 'Bad Request'
      }
    } else if (!result) {
      error = {
        status: 'NOT_FOUND',
        message: 'Data not Found'
      }
    }

    (error)
      ?
      res.json(new APIError(error.message, httpStatus[error.status], true))
      :
      res.json(result)
  })
}