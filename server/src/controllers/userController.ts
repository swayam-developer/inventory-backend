import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/app/generated/prisma/client";

const prisma = new PrismaClient();

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.users.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving users" });
  }
};
console.log("PrismaClient loaded:", PrismaClient);

