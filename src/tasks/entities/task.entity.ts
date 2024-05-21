import { Prisma } from '@prisma/client';

export class Task implements Prisma.TaskUncheckedCreateInput {
    id?: string;
    title: string;
    description?: string;
    done?: boolean;
    createdAt?: string | Date;
    updatedAt?: string | Date;
}
