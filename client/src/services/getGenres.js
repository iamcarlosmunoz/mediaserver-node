export default async function getGenres() {
    return await fetch(`/api/genres/`)
      .then((res) => res.json())
      .then(
        (result) => {
          return result
        }
      )
  }