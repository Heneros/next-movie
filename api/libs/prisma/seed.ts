import { PrismaClient } from '@prisma/client';

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

  for (const m of moviesData) {
    const created = await prisma.movie.upsert({
      where: { slug: m.slug },
      update: {},
      create: {
        title: m.title,
        description: m.description,
        slug: m.slug,
        year: m.year,
        category: m.category,
        published: m.published,
        rating: m.rating,
        avgRating: m.avgRating,
        author: {
          connect: { id: user.id },
        },
      },
    });
    console.log('Movie ready:', created.title, 'id:', created.id);
  }
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
