// apps/mobile/src/trpc.ts
import { createTRPCClient } from "@trpc/client"; // Importa la función para crear el cliente
import { AppRouter } from "../../backend/src/trpc/routers"; // Importa el tipo del backend
import { httpLink } from "@trpc/client"; // Asegúrate de importar httpLink correctamente

// Crear el cliente tRPC con un enlace HTTP a la URL de tu backend
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: "http://localhost:4000/trpc", // La URL del servidor backend
    }),
  ],
});

export default trpc;
