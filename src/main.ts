import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { APIGatewayEvent } from 'aws-lambda';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logger/logger.interceptor';

async function bootstrap() {
  console.info('🚀 Bootstarting Local Server 🚀');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  console.info('🚀 Bootstarting appmodule🚀');
  const globalPrefix = 'graphql';

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalInterceptors(new LoggingInterceptor());

  const port = process.env.PORT || 3333;
  await app.listen(port);

  console.info(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
}

let cachedServer: unknown;
const lambdaHandler = async (event: APIGatewayEvent) => {
  try {
    console.info('🚀 Bootstarting Lambda Server 🚀');

    if (!cachedServer) {
      console.info(`🚀 Creating Nest Application 🚀`);
      const nestApp = await NestFactory.create(AppModule);
      await nestApp.init();
      cachedServer = serverlessExpress({
        app: nestApp.getHttpAdapter().getInstance(),
      });
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return cachedServer(event);
  } catch (e) {
    console.error('There was an error while starting the server', e as Error);
  }
};

export const handler = lambdaHandler;

if (process.env.ENVIRONMENT === 'local') {
  console.info(`🚀 Running Application Locally 🚀`);
  bootstrap();
}
