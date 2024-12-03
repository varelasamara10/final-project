import { Request, Response } from "express";
import userService from "../services/userService";

class UserController {
  static async createUser(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const user = await userService.createUser({ username, email, password });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default UserController;
