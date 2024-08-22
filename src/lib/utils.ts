import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000/api" : "https://next-blog-rho-black.vercel.app/api"

// type ResponsData = {
//   title: string;
//   category: string;
//   slug: string;
// }

// export const fetcher = (...args: Parameters<typeof fetch>): Promise<ResponsData> =>
//   fetch(...args)
//     .then((res) => res.json())
    