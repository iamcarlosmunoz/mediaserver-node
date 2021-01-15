import { config } from "dotenv"

config()

export default {
    serverPort: process.env.PORT
}