"use client";

import React from "react";
import { useToast } from "@/hooks/useToast";
import Toast from "@/components/Toast";

export const ToastProvider = () => {
  const { toasts, removeToast } = useToast();

  return (
    <>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={true}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </>
  );
};

export default ToastProvider;
