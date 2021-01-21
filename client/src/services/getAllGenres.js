export default async function getAllMedia() {
  return await fetch("/api/genres/")
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok")
      return res.json()
    })
    .then((res) => {
      const { genres } = res
      return genres
    })
}
