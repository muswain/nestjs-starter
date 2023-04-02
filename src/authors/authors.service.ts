import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorsService {
  async findOneById(id: number) {
    return {
      id: `test ${id}`,
    };
  }
}
