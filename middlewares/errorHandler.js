module.exports = function (err, req, res, next) {
  console.log(err)
  if (err.name === 'SequelizeValidationError') {
    res.status(400).json({
      error_msg: err.errors[0].message
    })
  } else {
    res.status(500).json(err)
  }
}