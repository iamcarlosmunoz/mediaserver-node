import fs from "fs"
import config from "../config"

export const getUsers = async (req, res) => {
  try {
    const users = await JSON.parse(fs.readFileSync(config.urlUsersData, "utf-8"))

    const newArrayUsers = await users.slice().map((user) => {
      delete user.password
      delete user.watching_movies
      delete user.watching_series
      delete user.saved_movies
      delete user.saved_series
      delete user.roles
      return user
    })

    res.json({ users: newArrayUsers })
  } catch (error) {
    console.error("GET_USERS_ERROR: ", error)
    return res.status(500).json({ error: "Array of users not obtained" })
  }
}

export const getWatchingList = async (req, res) => {
  try {
    const users = await JSON.parse(fs.readFileSync(config.urlUsersData, "utf-8"))

    const userFound = await users.find((user) => user.id === req.userId)

    if (!userFound)
      return res.status(400).json({ token: null, message: "User not found" })

    delete userFound.id
    delete userFound.username
    delete userFound.password
    delete userFound.img_profile
    delete userFound.saved_movies
    delete userFound.saved_series
    delete userFound.roles

    res.json({ watching_list: userFound })
  } catch (error) {
    console.error("GET_LIST_WATCHING_ERROR: ", error)
    return res.status(500).json({ error: "Array of watching list not obtained" })
  }
}

export const addItemToWatchingMovies = async (req, res) => {
  const { id, time, duration } = req.body

  try {
    const users = await JSON.parse(fs.readFileSync(config.urlUsersData, "utf-8"))

    const userFound = await users.find((user) => user.id === req.userId)

    if (!userFound)
      return res.status(400).json({ token: null, message: "User not found" })

    await userFound.watching_movies.push({ id, time, duration })

    await users.map((user) => {
      if (user.id === userFound.id) {
        user.watching_movies = userFound.watching_movies
      }
      return user
    })

    fs.writeFileSync(config.urlUsersData, JSON.stringify(users))

    res.status(200).json({ message: "Added item to watching movies" })
  } catch (error) {
    console.error("UPDATE_LIST_WATCHING_ERROR: ", error)
    return res.status(500).json({ error: "Array of watching list not updated" })
  }
}

export const updateWatchingMovies = async (req, res) => {
  const { id, time } = req.body

  try {
    const users = await JSON.parse(fs.readFileSync(config.urlUsersData, "utf-8"))

    const userFound = await users.find((user) => user.id === req.userId)

    if (!userFound)
      return res.status(400).json({ token: null, message: "User not found" })

    await userFound.watching_movies.map((movie) => {
      if (movie.id === id) {
        movie.time = time
      }
      return movie
    })

    await users.map((user) => {
      if (user.id === userFound.id) {
        user.watching_movies = userFound.watching_movies
      }
      return user
    })

    fs.writeFileSync(config.urlUsersData, JSON.stringify(users))

    res.status(200).json({ message: "Update list watching movies" })
  } catch (error) {
    console.error("UPDATE_LIST_WATCHING_ERROR: ", error)
    return res.status(500).json({ error: "Array of list watching not updated" })
  }
}
