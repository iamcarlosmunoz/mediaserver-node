export default async function getAllUsers() {
    return await fetch("/api/users")
        .then((res) => {
            if (!res.ok) throw new Error("Response is NOT ok")
            return res.json()
        })
        .then((res) => {
            const { users } = res
            return users
        })
}