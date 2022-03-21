import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}
// nextjs의 hot reload 기능때문에 prisma instance가 계속 생성 됨.
// 따라서 해당 이슈를 고쳐줘야함.
const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

export default client;
