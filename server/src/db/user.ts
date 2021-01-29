const users = [
  {
    id: "uuuu",
    name: "Anna",
    image: {
      url: "http://example.com/1.png",
      title: "Profile picture",
    },
  },
  {
    id: "iiii",
    name: "Tom",
    image: {
      url: "http://example.com/1.png",
      title: "Profile picture",
    },
  },
];

export function getUserById(id: string) {
  console.log("getUserById", id);
  return users.find((user) => id === user.id) || null;
}

export function getUsersByIds(ids: readonly string[]) {
  console.log("getUserByIds", ids);
  return users.filter((user) => ids.includes(user.id));
}
