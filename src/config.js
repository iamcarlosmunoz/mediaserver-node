import { config } from "dotenv"

config()

export default {
    serverPort: process.env.PORT,
    SecretKey: process.env.SECRET_KEY,
    urlUserData: process.env.URL_USERS_DATA,
    urlMoviesData: process.env.URL_MOVIES_DATA,
}