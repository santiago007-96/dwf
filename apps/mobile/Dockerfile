# Usar una imagen oficial de Node.js como base
FROM node:18 AS frontend

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Instalar dependencias del proyecto
RUN pnpm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que el frontend usará
EXPOSE 3000

# Ejecutar el servidor de desarrollo
CMD ["pnpm", "dev"]