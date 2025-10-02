"use client";

import { useAtom } from "jotai";
import { useCallback } from "react";
import { toastsAtom, ToastMessage } from "@/store/atoms";

export const useToast = () => {
  const [toasts, setToasts] = useAtom(toastsAtom);

  const showToast = useCallback(
    (message: string, type: "success" | "error" | "info", duration = 3000) => {
      const id = Math.random().toString(36).substr(2, 9);
      const newToast: ToastMessage = { id, message, type, duration };
      setToasts((prev) => [...prev, newToast]);
    },
    [setToasts]
  );

  const removeToast = useCallback(
    (id: string) => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    },
    [setToasts]
  );

  return {
    toasts,
    showToast,
    removeToast,
  };
};
