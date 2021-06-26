//to do import and decorate product service

module.exports = () => (req, res, next) => {
    req.storage = {};
    next();
  };
  