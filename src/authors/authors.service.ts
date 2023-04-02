import { Injectable } from '@nestjs/common';
import { Author } from 'src/typings/graphql';

@Injectable()
export class AuthorsService {
  async findOneById(id: number): Promise<Author> {
    return {
      id,
      firstName: 'john',
      lastName: 'Wick',
    };
  }
}
