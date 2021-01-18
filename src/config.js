import { config } from "dotenv"

config()

export default {
    serverPort: process.env.PORT,
    SecretKey: process.env.SECRET_KEY,
    urlGenresData: process.env.URL_GENRES_DATA,
    urlUsersData: process.env.URL_USERS_DATA,
    urlMoviesData: process.env.URL_MOVIES_DATA,
}