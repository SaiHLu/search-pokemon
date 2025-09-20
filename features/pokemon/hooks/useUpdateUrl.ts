import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useCallback } from "react";

export function useUpdateUrl() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams);

      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }

      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname]
  );
}
