import prisma from "../database";
import { IResolvers } from "../types/generated/resolvers";

const resolvers: IResolvers = {
  Query: {
    post: (root, args) => {
      const { id } = args;
      return prisma.post.findUnique({
        where: {
          id,
        },
      });
    },
    posts: () => {
      return prisma.post.findMany();
    },
  },
  Post: {
    author: (root) => {
      return prisma.user.findUnique({
        where: {
          id: root.authorId,
        },
      });
    },
  },
};

export default resolvers;
