import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const userEmail = 'seed-admin@example.com';

  const user = await prisma.user.upsert({
    where: { email: userEmail },
    update: {},
    create: {
      email: userEmail,
      username: 'seed_admin',
      password: 'password123',
    },
  });
  console.log('User ready:', { id: user.id, email: user.email });

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
