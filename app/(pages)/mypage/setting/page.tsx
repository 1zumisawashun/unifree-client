import { MypageSetting } from "@/features/mypage/MypageSetting";
import { authOptions } from "@/functions/libs/nextAuth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  return <MypageSetting user={session?.user} />;
}
