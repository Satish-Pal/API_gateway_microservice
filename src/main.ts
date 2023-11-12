import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { SeedingService } from './seeding/seeding.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const Seeding_service = app.get(SeedingService);

  await Seeding_service.seedData();

  await app.listen(3000);
}

bootstrap();
