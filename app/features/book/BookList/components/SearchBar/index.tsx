"use client";

import { InputText } from "@/components/forms";
import { useRouter } from "next/navigation";
import { BaseSyntheticEvent, useState } from "react";
import styles from "./styles.module.scss";

const BLOCK_NAME = "search-bar";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    router.push(`/results/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles[`${BLOCK_NAME}-form`]}>
      <InputText
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search...."
        width="full"
      />
    </form>
  );
};
