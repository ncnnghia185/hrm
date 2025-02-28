import { useState, useCallback } from "react";

type UseSearchProps<T> = {
    searchFunction: (query: string) => Promise<T[]>;
};

export const useSearch = <T,>({ searchFunction }: UseSearchProps<T>) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState<T[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const search = useCallback(async (query: string) => {
        if (query.trim() === "") return;

        setIsLoading(true);
        setError(null);

        try {
            const results = await searchFunction(query);
            setSearchResults(results);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An error occurred");
            setSearchResults([]);
        } finally {
            setIsLoading(false);
        }
    }, [searchFunction]);

    return {
        searchValue,
        setSearchValue,
        searchResults,
        isLoading,
        error,
        search,
    };
};