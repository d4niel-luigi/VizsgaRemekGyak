import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  await rentalsSeeder(15);
}

async function rentalsSeeder(count:number) {
  const books = await prisma.books.findMany()
  const bookIds = books.map(book => book.id)
  const seededData = [];
  for(let index = 0; index < count; index++){
    const start_date = faker.date.past();
    const end_date = new Date(start_date);
    end_date.setDate(start_date.getDate()+7);
    const rental = {
      book_id:faker.helpers.arrayElement(bookIds),
      start_date:start_date,
      end_date: end_date
    }
    seededData.push(rental);
  }
  await prisma.rentals.createMany({data:seededData})
  
}

main()
