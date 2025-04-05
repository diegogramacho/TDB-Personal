import { personalDevelopment } from "@prisma/client";

export class CreatePersonalDevelopmentDto implements personalDevelopment{
    id: string;
    title: string;
    description: string;
    category: string;
    reminder: Date;
    status: boolean;
    progress: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
