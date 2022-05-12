import ErrorHandler from "../utils/errorHandler";
export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  let error = { ...err };
  error.message = err.message;
  //   Mongoose error handling
  if (err.name === "ObjectId") {
    const message = `Resource not found .Invalid :${err.path}`;
    error = new ErrorHandler(message, 400);
  }
  // Handling mongoose valdation error
  if (err.name === "ValidationError") {
    const message = Object. values(err.errors).map((value) => value.message);
    error = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    error,
    message: error.message,
    stack: error.stack,
  });
};
