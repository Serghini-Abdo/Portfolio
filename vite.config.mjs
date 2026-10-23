import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import seoPlugin from "./scripts/vite-seo-plugin.mjs";

export default defineConfig({
  plugins: [react(), seoPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
});
