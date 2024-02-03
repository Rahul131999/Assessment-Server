import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const googleAuth = async (req, res) => {
  const { email, photo } = req.body;

  try {
    const validUser = await User.findOne({ email });

    if (validUser) {

      let { password: pass, ...safeUser } = validUser._doc;

      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

      safeUser = {...safeUser, token}

      res
        .status(200)
        .json(safeUser);
    } else {
      const generatePass = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
      const hashedPass = bcrypt.hashSync(generatePass,10)

      const user = new User({
        email,
        password:hashedPass,
        avatar:photo,
      })

      await user.save()

      let { password: pass, ...safeUser } = user._doc;

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      safeUser = {...safeUser, token}

      res
        .status(200)
        .json(safeUser);

    }
  } catch (error) {
    console.log('error', error)
  }
};
