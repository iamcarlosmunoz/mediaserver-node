export default async function getMultimedia({ typeMedia = "movies" }) {
  return await fetch(`/api/${typeMedia}/`)
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      },
      (error) => {
        return error
      }
    )
}