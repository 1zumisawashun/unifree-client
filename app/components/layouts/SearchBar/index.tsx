"use client";
import { InputText } from "@/components/forms/InputText";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search...."
        width="full"
      ></InputText>
    </form>
  );
};
