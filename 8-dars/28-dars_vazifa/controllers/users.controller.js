import fs from "fs";
import path from "path";
const __dirname = import.meta.dirname;

const usersFilePath = path.join(__dirname, "../database/users.json");

function getUsersFromFile() {
    const data1 = fs.readFileSync(usersFilePath, "utf-8", (err, data) => {
    if (err) throw err;
    else {
      return (data);
    }
  });
  return JSON.parse(data1)
}

function saveUsersToFile(users) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
}

function getAllUsers(req, res) {
  const users = getUsersFromFile();
  console.log(users);
  res.json({
    data: users,
  });
}

function getUserById(req, res) {
  const userId = req.params.id;
  const users = getUsersFromFile();
  const user = users.find((user) => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}

function createUser(req, res) {
  const { name, email } = req.body;
  const users = getUsersFromFile();
  const newUser = { id: Date.now().toString(), name, email };
  users.push(newUser);
  saveUsersToFile(users);
  res.status(201).json(newUser);
}

function updateUser(req, res) {
  const userId = req.params.id;
  const { name, email } = req.body;
  const users = getUsersFromFile();
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], name, email };
    saveUsersToFile(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}

function deleteUser(req, res) {
  const userId = req.params.id;
  const users = getUsersFromFile();
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)[0];
    saveUsersToFile(users);
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
}

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
