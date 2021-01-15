export default async function getUsers() {
    return await fetch("api/users")
        .then((res) => res.json())
        .then(
            (result) => {
                return result
            })
}