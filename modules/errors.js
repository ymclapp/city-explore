'use strict';

function errorHandler(error, request, response, next) {
  console.log(error);
  response.status(500).json({
    error: true,
    message: error.message
  });
}

function notFoundHandler(request, response) {
  response.status(404).send('I could not find what you were asking for.')
}

module.exports = {
  errorHandler,
  notFoundHandler,
};
