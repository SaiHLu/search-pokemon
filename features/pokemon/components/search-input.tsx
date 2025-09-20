"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { useDebounce, useUpdateUrl } from "../hooks";

export function SearchInput() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(searchQuery);
  const debouncedValue = useDebounce(searchInput, 300);
  const updateUrl = useUpdateUrl();

  useEffect(() => {
    updateUrl(debouncedValue);
  }, [debouncedValue, updateUrl]);

  return (
    <input
      type="search"
      placeholder="Search..."
      className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-md"
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
