export default async function signin({ id, password }) {
    return await fetch("/api/auth/signin", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, password })
    })
        .then((res) => {
            if (!res.ok) throw new Error("Response is NOT ok")
            return res.json()
        })
        .then((res) => {
            const { token } = res
            return token
        })
}