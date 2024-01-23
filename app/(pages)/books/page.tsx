import { SubHeader } from "@/components/layouts/SubHeader";
import { BookList } from "@/features/book/BookList";

export default async function Page() {
  return (
    <SubHeader title="Book List" href="/">
      <BookList />
    </SubHeader>
  );
}
