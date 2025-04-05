import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateFinancialDto } from './dto/create-financial.dto';
import { UpdateFinancialDto } from './dto/update-financial.dto';

@Injectable()
export class FinancialService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFinancialDto: CreateFinancialDto) {
    return this.prisma.financialAccount.create({ data: createFinancialDto });
  }

  async findAll(userId: string) {
    return await this.prisma.financialAccount.findMany({where: { userId }});
  }

  async findOne(id: string) {
    const financialAccount = await this.prisma.financialAccount.findUnique({
      where: { id },
      include:{financialRegisters: true}
    })

    if (!financialAccount) {
          throw new NotFoundException('Financial account not found or access denied.');
        }
    return financialAccount;

  }

  async update(id: string, updateFinancialDto: UpdateFinancialDto, ) {
    const result = await this.prisma.financialAccount.updateMany({
      where: { id }, data: updateFinancialDto });

    if (result.count === 0){
      throw new NotFoundException('Financial account not found or access denied.');
    }

    return result
  }

  async remove(id: string) {
    return this.prisma.financialAccount.delete({ where: { id } });
  }

  // Métodos para FinancialRegister
  createRegister(accountId: string, createRegisterDto: any) {
    return this.prisma.financialRegister.create({
      data: { ...createRegisterDto, accountId },
    });
  }

  findAllRegisters(financialAccountId: string) {
    return this.prisma.financialRegister.findMany({ where: { financialAccountId } });
  }

  removeRegister(accountId: string, registerId: string) {
    return this.prisma.financialRegister.delete({
      where: { id: registerId },
    });
  }
}