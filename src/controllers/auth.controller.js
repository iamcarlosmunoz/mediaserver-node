import fs from "fs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import config from "../config";

export const signup = async (req, res) => {
  const { username, password, img_profile, role } = req.body;

  try {
    const users = req.body.users;

    let userId = uuidv4();

    users.push({
      id: userId,
      username,
      password,
      img_profile,
      watching_movies: [],
      watching_series: [],
      saved_movies: [],
      saved_series: [],
      roles: !role ? "user" : role,
    });

    fs.writeFileSync(config.urlUsersData, JSON.stringify(users));

    // Create a token
    const token = jwt.sign({ id: userId }, config.SecretKey, {
      expiresIn: 86400, // 24 hours
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error("SIGNUP_ERROR: ", error);
    return res.status(500).json({ error: "User not created" });
  }
};

export const signin = async (req, res) => {
  const { id, password } = req.body;

  try {
    const users = await JSON.parse(
      fs.readFileSync(config.urlUsersData, "utf-8")
    );

    const userFound = await users.slice().find((user) => {
      if (user.id === id) {
        return user;
      }
    });

    if (!userFound)
      return res.status(400).json({ token: null, message: "User not found" });

    if (!(password === userFound.password))
      return res.status(401).json({ token: null, message: "Invalid Password" });

    const token = jwt.sign({ id: userFound.id }, config.SecretKey, {
      expiresIn: 86400, // 24 hours
    });

    res.json({ token });
  } catch (error) {
    console.error("SIGNIN_ERROR: ", error);
    return res.status(500).json({ error: "Users not obtained" });
  }
};
