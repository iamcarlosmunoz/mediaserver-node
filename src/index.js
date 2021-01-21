import app from "./app"

app.listen(app.get("port"), () => {
  console.info(`Listening on port ${app.get("port")}`)
})
