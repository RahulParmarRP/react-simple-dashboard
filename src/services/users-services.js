import httpClient from "./http-service";

export const getUsers = async () =>
  httpClient.get("https://jsonplaceholder.typicode.com/users");

export const checkLoggedInUser = async (loggedInUser) => {
  let user = null;
  await getUsers()
    .then((res) => {
      const users = res.data.map((user) => (user.password = "test1234"));
      const userFound = users.find(
        (user) =>
          user.email === loggedInUser.email &&
          user.password === loggedInUser.password
      );
      if (userFound) {
        localStorage.setItem("user", JSON.stringify(userFound));
        user = userFound;
      }
    })
    .catch((error) => console.log(error));
  return user;
};
