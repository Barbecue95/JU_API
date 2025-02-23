import prisma from "../config/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../utils/constant";

interface LoginResponse {
  token: string;
  user: { id: number; username: string };
}

export const registerUser = async (username: string, password: string) => {
  // Check if user exists
  const existingUser = await prisma.user.findUnique({ where: { username } });
  if (existingUser) throw new Error("User already exists");

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in DB
  return prisma.user.create({
    data: {
      username,
      password: hashedPassword,
    },
  });
};

export const loginUser = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  // Find user in DB
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Verify password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    SECRET_KEY as string,
    { expiresIn: "1h" }
  );

  return { token, user: { id: user.id, username: user.username } };
};
