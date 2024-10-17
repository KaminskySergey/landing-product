import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_API_BOT_TOKEN': JSON.stringify(process.env.VITE_API_BOT_TOKEN),
    'process.env.VITE_ID_CHAT': JSON.stringify(process.env.VITE_ID_CHAT)
  }
})
