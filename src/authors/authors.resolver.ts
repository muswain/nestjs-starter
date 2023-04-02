import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthorsService } from './authors.service';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query()
  async author(@Args('id') id: number) {
    return this.authorsService.findOneById(id);
  }
}
