import { initTRPC } from "@trpc/server";
import { prisma } from "../../../../../packages/db/prisma"; // Asegúrate de que Prisma esté bien importado
import { z } from "zod"; // Si usas validación de Zod

const t = initTRPC.create();

export const appRouter = t.router({
  // Ejemplo de consulta para obtener un usuario
  getUser: t.procedure.input(z.string()).query(async ({ input }) => {
    return prisma.user.findUnique({
      where: { id: input },
    });
  }),

  // Ejemplo de mutación para crear un usuario
  createUser: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ input }) => {
      return prisma.user.create({
        data: { name: input.name },
      });
    }),
});

export type AppRouter = typeof appRouter; // Exportamos el tipo del router
