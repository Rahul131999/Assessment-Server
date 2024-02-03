import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  let cookieString = req.headers.cookie;
  if (!cookieString)
    return res.status(401).json({ error: "Unauthorized access" });
  const token = cookieString.slice("access_token=".length);
  console.log("token", token);

  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) return res.status(403).json({ error: 'Forbidden access' });
    next();
  });
};
