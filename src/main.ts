import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  console.info('🚀 Bootstarting Local Server 🚀');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.info('🚀 Bootstarting appmodule🚀');
  const globalPrefix = 'graphql';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  console.info(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

bootstrap();
