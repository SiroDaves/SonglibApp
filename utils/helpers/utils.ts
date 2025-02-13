import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const matchNavigationPaths = (routerPath: string, optionPath: string) => {
  switch (true) {
    case routerPath.includes("/proposals"):
      return optionPath.includes("/proposals");
    case routerPath.includes("/dashboard"):
      return optionPath.includes("/dashboard");
    case routerPath.includes("/aml-apps"):
      return optionPath.includes("/aml-apps");
    case routerPath.includes("/medical-underwriting"):
      return optionPath.includes("/medical-underwriting");
    default:
      return routerPath.includes(optionPath);
  }
};
