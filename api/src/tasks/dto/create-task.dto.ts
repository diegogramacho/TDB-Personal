import { $Enums, Task } from "@prisma/client";

export class CreateTaskDto  implements Task{
    parentId: string | null;
    recurrence: $Enums.recurrence | null;
    customRecurrence: $Enums.customRecurrence | null;
    id: string;
    title: string;
    description: string;
    category: string | null;
    reminder: Date | null;
    status: boolean;
    priority: number;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
}
