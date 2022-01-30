import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

// TODO: Define the Prisma client as a singleton
const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const contactData = JSON.parse(req.body);

  const savedContact = await prisma.contact.create({
    data: contactData,
  });

  res.json(savedContact);
};

export default handler;
