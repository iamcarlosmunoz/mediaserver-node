export default async function getWatchingList({ token }) {
  return await fetch("/api/users/watching", {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error("Response is NOT ok");
      return res.json();
    })
    .then((res) => {
      const { watching_list } = res;
      return watching_list;
    });
}
