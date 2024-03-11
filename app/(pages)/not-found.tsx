import { NotFoundFallback } from "@/components/elements/NotFoundFallback";
import { LayoutContainer } from "@/components/layouts/LayoutContainer";

export default function NotFound() {
  return (
    <LayoutContainer>
      <NotFoundFallback />
    </LayoutContainer>
  );
}
