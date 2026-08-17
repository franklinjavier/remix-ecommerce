import { vercelPreset } from '@vercel/react-router/vite'

import type { Config } from '@react-router/dev/config'

export default {
  ssr: true,
  // Only apply the Vercel preset when building on Vercel, so the local
  // `build` output keeps the default layout expected by `react-router-serve`.
  presets: process.env.VERCEL ? [vercelPreset()] : [],
} satisfies Config
