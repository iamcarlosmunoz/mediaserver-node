export default async function getAllMedia({ typeMedia }) {
  return await fetch(`/api/${typeMedia}/`)
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok")
      return res.json()
    })
    .then((res) => {
      const { media } = res
      return media
    })
}
