import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Built to be served at the ROOT of spouseconference.roundrockfirefoundation.org
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: { port: 3000 },
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
