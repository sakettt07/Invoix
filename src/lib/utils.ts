import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const currencyoption={
  INR:'₹',
  USD:'$',
  EUR:'€',
  GBP:'£',
  JPN:'¥',
}
