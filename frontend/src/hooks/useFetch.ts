"use client";

import { useState, useEffect, useCallback } from "react";

enum FetchStatus {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface UseFetchOptions {
  skip?: boolean;
  dependencies?: any[];
}

export function useFetch<T>(url: string, options?: UseFetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<FetchStatus>(FetchStatus.IDLE);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    if (options?.skip) return;

    setStatus(FetchStatus.LOADING);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const result = await response.json();
      setData(result);
      setStatus(FetchStatus.SUCCESS);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Unknown error"));
      setStatus(FetchStatus.ERROR);
    }
  }, [url, options?.skip]);

  useEffect(() => {
    fetchData();
  }, [fetchData, ...(options?.dependencies || [])]);

  return {
    data,
    status,
    error,
    isLoading: status === FetchStatus.LOADING,
    isError: status === FetchStatus.ERROR,
    isSuccess: status === FetchStatus.SUCCESS,
    refetch: fetchData,
  };
}
