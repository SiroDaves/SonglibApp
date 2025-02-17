import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const matchNavigationPaths = (routerPath: string, optionPath: string) => {
  if (optionPath.startsWith("/#")) {
    return window.location.hash === optionPath;
  }
  return routerPath === optionPath;
};
