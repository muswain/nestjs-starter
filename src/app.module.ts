import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthorsModule } from './authors/authors.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/typings/graphql.ts'),
      },
    }),
    AuthorsModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    console.info('🚀 Middleware registered 🚀');
    consumer.apply(LoggerMiddleware).forRoutes(AuthorsModule);
  }
}
