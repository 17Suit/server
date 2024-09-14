import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.currency.upsert({
    where: { name: 'USD' },
    update: {},
    create: {
      name: 'USD',
      symbol: '$',
    },
  });

  await prisma.currency.upsert({
    where: { name: 'EUR' },
    update: {},
    create: {
      name: 'EUR',
      symbol: '€',
    },
  });

  await prisma.currency.upsert({
    where: { name: 'COP' },
    update: {},
    create: {
      name: 'COP',
      symbol: '$',
    },
  });
  await prisma.currency.upsert({
    where: { name: 'MXN' },
    update: {},
    create: {
      name: 'MXN',
      symbol: '$',
    },
  });
  console.log('Currencies created or updated');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
