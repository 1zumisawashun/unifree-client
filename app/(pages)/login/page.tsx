import { Header } from "@/components/layouts/Header";
import { LayoutCenter } from "@/components/layouts/LayoutCenter";
import { Login } from "@/features/login";

export default function Page() {
  return (
    <>
      <Header />
      <LayoutCenter>
        <Login />
      </LayoutCenter>
    </>
  );
}
