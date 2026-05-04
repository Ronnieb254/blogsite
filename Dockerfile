# Stage 1 — build
FROM node:24 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 — serve
FROM node:24-slim
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]