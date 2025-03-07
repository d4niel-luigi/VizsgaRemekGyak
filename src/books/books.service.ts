import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BooksService {
  constructor(readonly db: PrismaService ) {
  }
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  async findAll() {
    const books = await this.db.books.findMany()
    return {
      data:books
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
