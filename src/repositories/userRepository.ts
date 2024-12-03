import User from "../models/userModel";

class UserRepository {
  static async createUser(data: {
    username: string;
    email: string;
    password: string;
  }) {
    const user = await User.create(data);
    return user;
  }

  static async getAllUsers() {
    const users = await User.findAll();
    return users;
  }
}

export default UserRepository;
