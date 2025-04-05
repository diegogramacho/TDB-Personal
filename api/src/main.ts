import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://tdb.personal.com.br', 
      'http://localhost:3000',     
      'https://localhost:3000',    
    ], 
    methods: ['GET', 'POST', 'PUT','PATCH', 'DELETE'], 
    credentials: true, 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
