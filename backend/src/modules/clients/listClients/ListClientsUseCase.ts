import { prisma } from "../../../lib/prisma";

export class ListClientsUseCase{
    async execute(){
        const clients = await prisma.client.findMany()

        return clients
    }
}