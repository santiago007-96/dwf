// apps/backend/src/server.ts
import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpc/routers";
import { prisma } from "../../../packages/db/prisma"; // Importar Prisma desde el paquete /packages/db

const app = express();

app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => ({ prisma }), // Pasa el cliente Prisma como contexto
  })
);

app.listen(4000, () => {
  console.log("Backend corriendo en http://localhost:4000");
});
