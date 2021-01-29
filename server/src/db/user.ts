const users = [
  {
    id: "uuuu",
    name: "Anna",
  },
];

export function getUserById(id: string) {
  console.log("getUserById", id);
  return users.find((user) => id === user.id) || null;
}
