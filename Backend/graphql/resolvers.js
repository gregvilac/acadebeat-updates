import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    // hello: () => "world",
    post: () => "Hello",
    languages: async () => {
      const languages = await prisma.language.findMany();
      return languages;
    },
  },
};

export default resolvers;
