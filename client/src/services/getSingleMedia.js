export default async function getMultimediaById({ typeMedia = 'movies', id} = {}) {
  return await fetch(`/api/${typeMedia}/${id}`)
    .then((res) => res.json())
    .then(
      (result) => {
        return result
      }
    )
}