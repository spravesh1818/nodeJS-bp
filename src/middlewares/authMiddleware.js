import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // Check the header of the request
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.json({ msg: "Unauthorized.Authentication token required" });
  }

  try {
    jwt.verify(authorization, "secretKey");
  } catch (e) {
    console.log(e);
    return res.json({ msg: "Error while decoding token" });
  }

  next();
};

export { authMiddleware };
