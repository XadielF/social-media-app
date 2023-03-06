const myMiddleware = (req, res, next) => {
  console.log("${req.method} ${req.url}");
  console.log("Executing middleware");
  next();
};

module.exports = myMiddleware;
