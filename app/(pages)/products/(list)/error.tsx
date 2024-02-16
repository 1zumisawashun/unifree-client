"use client";

import { ErrorFallback } from "@/components/elements/ErrorFallback";

export default function Error({
  error,
}: // reset,
{
  error: Error & { digest?: string };
  // reset: () => void;
}) {
  // Attempt to recover by trying to re-render the 〇〇 route
  return <ErrorFallback message={error.message} />;
}
