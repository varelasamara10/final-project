import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserRepository from "../repositories/userRepository";
import { generateToken } from "../utils/jwtUtils";

class AuthService {
  static async login(email: string, password: string): Promise<string> {
    const user = await UserRepository.getAllUsers().then((users) =>
      users.find((user) => user.email === email),
    );

    if (!user) throw new Error("User not found");

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) throw new Error("Invalid credentials");

    const token = generateToken({ id: user.id, email: user.email });

    return token;
  }
}

export default AuthService;
