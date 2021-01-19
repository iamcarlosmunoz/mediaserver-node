import fs from "fs";
import config from "../config";

export const getGenres = async (req, res) => {
  try {
    const genres = await JSON.parse(
      fs.readFileSync(config.urlGenresData, "utf-8")
    );

    res.json({ genres: genres });
  } catch (error) {
    console.error("GET_GENRES_ERROR: ", error);
    return res.status(500).json({ error: "Array of genres not obtained" });
  }
};
