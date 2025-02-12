import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/theme/_mantine.scss" as *;`, // Use `@use` instead of `@import`
      },
    },
  },
  server: {
    host: true,
    port: 5174,
  },
  assetsInclude: ["**/*.ttf"],
});
