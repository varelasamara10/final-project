import UserRepository from "../repositories/userRepository";
import bcrypt from "bcrypt";

class UserService {
  static async createUser(data: {
    username: string;
    email: string;
    password: string;
  }) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await UserRepository.createUser({
      ...data,
      password: hashedPassword,
    });
    return user;
  }

  static async getAllUsers() {
    const users = await UserRepository.getAllUsers();
    return users;
  }
}

export default UserService;
