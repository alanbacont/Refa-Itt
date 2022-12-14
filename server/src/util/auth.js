const jwt = require("jsonwebtoken");

const createJWTToken = (usuarios) => {
  return jwt.sign({ usuarios }, "hello123", {
    expiresIn: "4h",
  });
};

const authProvider = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHEader.split("Bearer")[1];
    if (token) {
      try {
        const user = jwt.verify(token, "hello123");
        return user;
      } catch (err) {
        throw new Error("Invalid token");
      }
    }
    throw new Error("Token erróneo");
  }
  throw new Error("No header");
};

module.exports = {
  createJWTToken,
  authProvider,
};
