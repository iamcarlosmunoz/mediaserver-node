export default async function getMultimediaById({ id } = {}) {
    return await fetch(`/api/users/${id}`)
        .then((res) => res.json())
        .then((result) => result)
}