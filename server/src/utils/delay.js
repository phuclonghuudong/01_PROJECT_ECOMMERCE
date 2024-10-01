const delay1s = (req, res, next) => {
  setTimeout(() => {
    next();
  }, 1000);
};

module.exports = delay1s;
