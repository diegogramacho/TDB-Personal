import { FinancialAccount } from "@prisma/client"

export class CreateFinancialDto implements FinancialAccount{
    name: string;
    id: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
