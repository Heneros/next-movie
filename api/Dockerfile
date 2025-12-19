FROM node:23.11.1

RUN corepack enable && corepack prepare pnpm@latest --activate

RUN apt-get update \
 && apt-get install -y netcat-openbsd \
 && rm -rf /var/lib/apt/lists/*


WORKDIR /usr/src/app

COPY api/package.json api/pnpm-lock.yaml* ./

RUN pnpm install --no-frozen-lockfile

COPY api/ .

ENV NODE_ENV=development
ENV CI=true

EXPOSE 3000

# RUN pnpm prisma generate --schema=libs/prisma/schema.prisma


CMD ["sh", "-c", "pnpm run start:dev"]