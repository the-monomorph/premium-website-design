import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/premium-website-design/", 
  build: {
    outDir: "docs"
  },
  plugins: [react()],
});
