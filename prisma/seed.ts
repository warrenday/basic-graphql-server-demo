import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  console.log("Seeding database...");

  // Drop all data
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  // Create users
  const userA = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@email.com",
    },
  });
  const userB = await prisma.user.create({
    data: {
      name: "Pete",
      email: "pete@email.com",
    },
  });

  // Create 5 posts
  await prisma.post.createMany({
    data: [
      {
        title: "Post 1",
        content: "Content 1",
        authorId: userA.id,
      },
      {
        title: "Post 2",
        content: "Content 2",
        authorId: userA.id,
      },
      {
        title: "Post 3",
        content: "Content 3",
        authorId: userA.id,
      },
      {
        title: "Post 4",
        content: "Content 4",
        authorId: userB.id,
      },
      {
        title: "Post 5",
        content: "Content 5",
        authorId: userB.id,
      },
    ],
  });

  console.log("Database seeded!");
};

seed()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
