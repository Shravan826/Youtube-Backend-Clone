
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
  }
}



export { asyncHandler }


//This is also a way to do the conection by using try-catch
// const asyncHandler = (func) => async (req, res, next) => {
//   try {
//       await func(req,res,next)
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })
//   }
// }