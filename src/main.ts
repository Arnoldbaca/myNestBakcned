import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, ExecutionContext } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    })
   );

   const PORT = process.env.PORT ?? 3000
   console.log(`App corriendo en el puerto: ${PORT}`)
  await app.listen(PORT);
}
bootstrap();
