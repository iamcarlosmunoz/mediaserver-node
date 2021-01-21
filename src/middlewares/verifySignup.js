import fs from "fs";
import config from "../config";

const checkDuplicateUsername = async (req, res, next) => {
  try {
    const users = await JSON.parse(
      fs.readFileSync(config.urlUsersData, "utf-8")
    );

    const userFound = await users.find(
      (element) => element.username == req.body.username
    );

    if (userFound)
      return res.status(400).json({ message: "The user already exists" });

    req.body.users = users;

    next();
  } catch (error) {
    console.error("CHECK_DUPLICATE_USERNAME_ERROR: ", error);
    res.status(500).json({ error: "The username could not be validated" });
  }
};

export { checkDuplicateUsername };
