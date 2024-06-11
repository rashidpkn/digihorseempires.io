import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,);
  app.enableCors({origin:'*'});
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);

  console.log(path.join(__dirname,'..', 'frontend' , 'dist'));
}
bootstrap();
