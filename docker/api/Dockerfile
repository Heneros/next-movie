# ---------- builder ----------
FROM node:23.11.1 AS builder
WORKDIR /usr/src/app

RUN corepack enable && corepack prepare pnpm@latest 

COPY api/package.json  ./api/

WORKDIR /usr/src/app/api

RUN npm ci

WORKDIR /usr/src/app

COPY api/ ./api/

COPY libs/prisma ./libs/prisma

WORKDIR /usr/src/app/api

RUN npx prisma generate --schema=../libs/prisma/schema.prisma

# RUN npx prisma migrate dev --schema=../libs/prisma/schema.prisma

RUN npm run build

# ---------- development runtime ----------
FROM node:23.11.1  AS development
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/api ./api
WORKDIR /usr/src/app/api
CMD ["npm", "run", "start:dev"]
