import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { FinancialService } from './financial.service';
import { CreateFinancialDto } from './dto/create-financial.dto';
import { UpdateFinancialDto } from './dto/update-financial.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('financial')
export class FinancialController {
  constructor(private readonly financialService: FinancialService) {}

  @Post()
  create(@Body() createFinancialDto: CreateFinancialDto) {
    return this.financialService.create(createFinancialDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() req: any) {
    const userId = req.user.sub;
    return this.financialService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFinancialDto: UpdateFinancialDto) {
    return this.financialService.update(id, updateFinancialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financialService.remove(id);
  }

  // Endpoints para FinancialRegister
  @Post(':accountId/register')
  createRegister(@Param('accountId') accountId: string, @Body() createRegisterDto: any) {
    return this.financialService.createRegister(accountId, createRegisterDto);
  }

  @Get(':accountId/registers')
  findAllRegisters(@Param('accountId') accountId: string) {
    return this.financialService.findAllRegisters(accountId);
  }

  @Delete(':accountId/register/:registerId')
  removeRegister(@Param('accountId') accountId: string, @Param('registerId') registerId: string) {
    return this.financialService.removeRegister(accountId, registerId);
  }
}