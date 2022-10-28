const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const planetData = [
  {
    name: "Mercury",
  },
  {
    name: "Venus",
  },
  {
    name: "Mars",
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const p of planetData) {
    const planet = await prisma.planet.create({ data: p });
    console.log(`Created planet with id: ${planet.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
