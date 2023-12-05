import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common/pipes';
import { Transform } from 'class-transformer';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';

// import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
// import { SeedingService } from './seeding/seeding.service';

async function bootstrap() {
  initializeTransactionalContext();
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false },
    }),
  );


  // const Seeding_service = app.get(SeedingService);

  // await Seeding_service.seedData();

  await app.listen(3000);
}
bootstrap();
