import { SubHeader } from "@/components/layouts/SubHeader";
import { BookCreate } from "@/features/book/BookCreate";

export default async function Page() {
  return (
    <SubHeader title="Book Create" href="/books">
      <BookCreate />
    </SubHeader>
  );
}
