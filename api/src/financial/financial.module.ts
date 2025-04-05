import { Module } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { FinancialController } from './financial.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [FinancialController],
  providers: [FinancialService],
  imports:[DatabaseModule]
})
export class FinancialModule {}
