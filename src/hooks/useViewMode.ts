"use client";

import { useAtom } from "jotai";
import { viewModeAtom } from "@/store/atoms";

export const useViewMode = () => {
  return useAtom(viewModeAtom);
};
