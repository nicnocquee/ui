import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import fs from "fs";

function registryPlugin() {
  return {
    name: "registry-copy",
    closeBundle() {
      fs.cpSync(
        path.resolve(__dirname, "registry"),
        path.resolve(__dirname, "dist/registry"),
        { recursive: true }
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), registryPlugin()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    copyPublicDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
