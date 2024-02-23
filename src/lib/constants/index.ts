export const REVALIDATE_DURATION = Number(process.env.NEXT_PUBLIC_REVALIDATE_DURATION) || 60;
export const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : process.env.NEXT_PUBLIC_APP_URL || "";