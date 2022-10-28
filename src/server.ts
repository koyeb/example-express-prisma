import { PrismaClient } from "@prisma/client";
import express from "express";
import EnvVars from "./configurations/EnvVars";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post(`/planets`, async (req, res) => {
  const { name } = req.body;

  const result = await prisma.planet.create({
    data: {
      name: name,
    },
  });
  res.json(result);
});

app.get(`/planets`, async (req, res) => {
  const { name } = req.body;
  const result = await prisma.planet.findMany();
  res.json(result);
});

app.get("/", async (_, res) => {
  res.send("Hello from Koyeb!");
});

app.listen(EnvVars.port, () =>
  console.log(`🚀 Server started on ${EnvVars.port.toString()}`)
);
