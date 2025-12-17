#!/bin/sh
set -e

echo " Waiting for PostgreSQL..."

until nc -z postgres 5432; do
  sleep 1
done

echo " PostgreSQL is ready"

echo " Prisma generate"
pnpm exec prisma generate --schema=libs/prisma/schema.prisma

echo " Prisma migrate"
pnpm exec prisma migrate dev --schema=libs/prisma/schema.prisma

echo " Prisma seed"
pnpm exec ts-node libs/prisma/seed.ts

echo "Done"
