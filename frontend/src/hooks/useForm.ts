"use client";

import { useState, useCallback } from "react";

interface UseFormState {
  [key: string]: any;
}

export function useForm<T extends UseFormState>(
  initialState: T,
  onSubmit: (data: T) => Promise<void> | void,
) {
  const [formData, setFormData] = useState<T>(initialState);
  const [errors, setErrors] = useState<Partial<T>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const { name, value, type } = e.target as any;
      const newValue =
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

      setFormData((prev) => ({
        ...prev,
        [name]: newValue,
      }));

      // Clear error for this field when user starts typing
      if (errors[name as keyof T]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }
    },
    [errors],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);
      setIsSubmitted(false);

      try {
        await onSubmit(formData);
        setIsSubmitted(true);
        setFormData(initialState);
      } catch (error: any) {
        setErrors({
          submit: error.message || "An error occurred",
        } as any);
      } finally {
        setIsLoading(false);
      }
    },
    [formData, initialState, onSubmit],
  );

  const reset = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setIsSubmitted(false);
  }, [initialState]);

  return {
    formData,
    setFormData,
    errors,
    setErrors,
    isLoading,
    isSubmitted,
    handleChange,
    handleSubmit,
    reset,
  };
}
