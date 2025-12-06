import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';

import bcrypt from 'bcryptjs';

// const prisma = new PrismaClient();

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  const directorNames = [
    'Steven Spielberg',
    'Christopher Nolan',
    'Greta Gerwig',
    'Ava DuVernay',
    'Quentin Tarantino',
  ];

  const userAdminEmail = 'seed-admin@example.com';
  const userEditorEmail = 'seed-editor@example.com';
  const pass = 'password123';
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(pass, salt);

  const user = await prisma.user.upsert({
    where: { email: userAdminEmail },
    update: {},
    create: {
      role: 'ADMIN',
      email: userAdminEmail,
      isEmailVerified: true,
      username: 'seed_admin',
      password: hashedPassword,
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: userEditorEmail },
    update: {},
    create: {
      role: 'EDITOR',
      email: userEditorEmail,
      isEmailVerified: true,
      username: 'seed_editor',
      password: hashedPassword,
    },
  });

  await prisma.verifyResetToken.upsert({
    where: { userId: user.id },
    update: {},
    create: {
      token: 'EDITOR',
      userId: user.id,
    },
  });

  await prisma.verifyResetToken.upsert({
    where: { userId: user2.id },
    update: {},
    create: {
      token: 'qwwerrtt',
      userId: user2.id,
    },
  });
  console.log('User ready:', { id: user.id, email: user.email });


  const directorPromises = directorNames.map((name) =>
    prisma.director.create({
      data: { name, bio: faker.lorem.sentences(2) },
    }),
  );

  const directors = await Promise.all(directorPromises);
  const moviesData = [
    {
      title: 'The Last Dawn',
      description: 'An epic adventure through landscapes and time.',
      slug: 'the-last-dawn',
      year: 2021,
      category: ['Drama', 'Adventure'],
      published: true,
      rating: 0,
      avgRating: 0,
    },
    {
      title: 'City of Lights',
      description: 'A romantic drama set in a bustling metropolis.',
      slug: 'city-of-lights',
      year: 2019,
      category: ['Romance', 'Drama'],
      published: true,
      rating: 0,
      avgRating: 0,
    },
    {
      title: 'Quantum Run',
      description: 'Sci-fi thriller about time loops and corporate secrets.',
      slug: 'quantum-run',
      year: 2023,
      category: ['Sci-Fi', 'Action'],
      published: false,
      rating: 0,
      avgRating: 0,
    },
  ];

  const moviePromises = [];

  for (let i = 0; i < 12; i++) {
    const title = faker.lorem.words({ min: 2, max: 4 });
    const slug = faker.helpers.slugify(title).toLowerCase();

    const categories = faker.helpers.arrayElements(
      ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Fantasy', 'Thriller'],
      faker.number.int({ min: 1, max: 3 }),
    );
    const selected = faker.helpers.arrayElements(directors, faker.number.int({ min: 0, max: 2 }));

    moviePromises.push(
      prisma.movie.create({
        data: {
          title: title,
          description: faker.lorem.sentence(),
          slug: slug,
          year: faker.number.int({ min: 1950, max: 2025 }),
          category: categories,
          author: {
            connect: { id: user.id },
          },
              directors: {
            connect: selected.map((d) => ({ id: d.id })),
          },
        },
      }),
    );
  }

  const movies = await Promise.all(moviePromises);

  movies.forEach((movie) => {
    console.log('Movie ready:', movie.title, 'id:', movie.id);
  });
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error('Seeding error: ', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
