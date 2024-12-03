import { Request, Response } from "express";
import authService from "../services/authService";

class AuthController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const token = await authService.login(email, password);
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default AuthController;
