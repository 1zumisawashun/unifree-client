import { faker } from "@/functions/libs/faker";
import { Prisma } from "@prisma/client";

export const users: Prisma.UserCreateInput[] = [
  {
    uid: "aE1oAcAEJEXIqqeHhFfTvH3WMrT2",
    photoURL:
      "https://lh3.googleusercontent.com/a-/ALV-UjW8t6N1REvbShvQ90Cg3E4w4Zb7hqCzsndHOp47Xgik=s96-c",
    displayName: faker.person.fullName(),
  },
  {
    uid: "uCA4U2Aih3YEKwlUeo97qn74ajc2",
    photoURL:
      "https://lh3.googleusercontent.com/a-/ALV-UjUjeYlgpuvVy6tzaOBczL27Y9wH6N4Bace4hbVCZmoQ=s96-c",
    displayName: faker.person.fullName(),
  },
];
