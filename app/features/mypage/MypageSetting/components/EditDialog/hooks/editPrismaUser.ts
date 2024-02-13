import { API } from "@/functions/constants/api";
import { User } from "@/functions/types/Prisma";

type Props = {
  user: User;
  displayName: string;
  university: string;
  faculty: string;
  department: string;
};

export async function editPrismaUser({
  user,
  displayName,
  university,
  faculty,
  department,
}: Props) {
  const url = API.editPrismaUser(user.id);

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ displayName, university, faculty, department }),
  });

  return response.ok;
}
