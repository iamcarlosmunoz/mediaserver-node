export default async function uploadUser(user) {
    return await fetch("/api/users/upload/", 
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .catch(error => {
            console.error("UploadUser: ", error);
        });
}