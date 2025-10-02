"use client";

import { useAtom } from "jotai";
import { isComparingAtom } from "@/store/atoms";

export const useIsComparing = () => {
  return useAtom(isComparingAtom);
};
