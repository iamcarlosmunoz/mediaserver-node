import fs from "fs"
import path from "path"
import axios from "axios"

export default async function DownloadImages({ fileName, folderName }) {
  const url = `https://image.tmdb.org/t/p/original/${fileName}`
  const path_save = path.join(__dirname, "..", `public/${folderName}/`, fileName)
  const writer = fs.createWriteStream(path_save)

  const response = await axios({
    url,
    method: "GET",
    responseType: "stream"
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve)
    writer.on("error", reject)
  })
}