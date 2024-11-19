import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const baseUrl = mode === "production" ? "/react-pwa-test/" : "/";

  return {
    base: baseUrl,
    server: {
      port: 5654,
    },
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "script.js",
          chunkFileNames: "chunk-script.js",
          assetFileNames: (assetInfo) => {
            if (!assetInfo.names || assetInfo.names.length === 0) {
              return "assets/default.[ext]";
            }

            const assetName = assetInfo.names[0];
            if (assetName.endsWith(".css")) {
              return "style.css";
            }
            return `assets/${assetName}-[hash][extname]`;
          },
        },
      },
    },
  };
});
